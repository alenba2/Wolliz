from django.shortcuts import render
# from decouple import config
# from dotenv import dotenv_values
import pyrebase
import os
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from .serializers import TodoSerializer
from .models import Todo
from dotenv import load_dotenv
from rest_framework import status
from collections import OrderedDict
from django.http import JsonResponse

from sklearn.preprocessing import LabelEncoder # for preprocessing
import joblib # for saving algorithm and preprocessing objects

import requests

load_dotenv()

# Create your views here.
# Insert based on firebase

# NEED THIS TO CONNECT TO FIREBASE DATABASE
config = {
    "apiKey": os.getenv('API_KEY'),
    "authDomain": os.getenv('AuthDomain'),
    "databaseURL": os.getenv('DatabaseURL'),
    "projectId": os.getenv('ProjectId'),
    "storageBucket": os.getenv('StorageBucket'),
    "messagingSenderId": os.getenv('MessagingSenderId'),
    "appId": os.getenv('AppId'),
    "measurementId": os.getenv('MeasurementId'),
}

firebase=pyrebase.initialize_app(config)
authe = firebase.auth()
database=firebase.database()
storage = firebase.storage()


# An example code

# def index(request):
#         #accessing our firebase data and storing it in a variable
#         name = database.child('Data').child('Name').get().val()
#         stack = database.child('Data').child('Stack').get().val()
#         framework = database.child('Data').child('Framework').get().val()
    
#         context = {
#             'name':name,
#             'stack':stack,
#             'framework': framework
#         }
        
#         return render(request, context)

# Good reference on how to do things
# https://firebase.google.com/docs/database/admin/save-data 

# How Classes should be referenced
# https://www.django-rest-framework.org/tutorial/3-class-based-views/


# Views data
class MyLogin(APIView):

    # Get Data
    def get(self, request):
        data = database.child("Data").get().val()
        return Response(data)

# Adds Data
class PushData(APIView):
    # Pushes data to server
    def post(self, request):

        # Grabs params in first col, but if its null or doesn't exist it will return whatever on the second

        email = request.POST.get('email', 'not')
        password = request.POST.get('password', 'okay')

        data = database.child("Login").push({
            'email': email,
            'password': password
        })

        return Response(data)

# Sets/Updates Data
class SetData(APIView):
    
    def put(self, request, format=None):
        
        data = database.child("Da")

        try:
            data.set({
                'name': 'ine'
            })
            return Response("has been updated")
        except:
            return Response("something went wrong")

# deletes data   
class DeleteData(APIView):
    
    def delete(self, request):
        
        try:
            data = database.child("Login").remove()
            return Response("Deleted")
        except:
            return Response("something went wrong")

class Login(APIView):

    def post(self, request):
        data = database.child("LoginSignUp").get()

        email = request.POST.get('email', 'NULL')    
        password = request.POST.get('password', 'NULL')
        
        for user in data:

            if user.val()['email'] != email or user.val()['password'] != password:
                continue

            print(user.key())

            return Response(user.key(), status=status.HTTP_202_ACCEPTED)

        return Response('Error: User does not exist or Password is not correct', status=status.HTTP_400_BAD_REQUEST)


class Signup(APIView):

    def post(self, request):
        data = database.child("LoginSignUp").get()

        email = request.POST.get('email', 'NULL')
        password = request.POST.get('password', 'NULL')

        # Checks if email exists in database
        for user in data:
            if user.val()['email'] == email:
                return Response('Error: Email already exists')

        res = database.child("LoginSignUp").push({
            'email': email,
            'password': password
        })

        return Response(res)

class pushHouseInfo(APIView):
    def post(self, request):

        address = request.POST.get('address', 'NULL')
        state = request.POST.get('state', 'NULL')
        city = request.POST.get('city', 'NULL')
        zip = request.POST.get('zip', 'NULL')
        squareFeet = request.POST.get('squareFeet', 'NULL')
        bedroom = request.POST.get('bedroom', 'NULL')
        bathroom = request.POST.get('bathroom', 'NULL')
        price = request.POST.get('price', 'NULL')
        amenities = request.POST.get('amenities', 'NULL')
        file = request.POST.get('file', 'NULL')

        label_encoder = joblib.load('encoders.joblib')

        encode_add = [-1]
        encode_city = [-1]
        encode_state = [-1]

        try:
            encode_add = label_encoder['Address'].transform([address])
        except:
            print('Unique Address Variable detected')

        try:
            encode_city = label_encoder['City'].transform([city])
        except:
            print('Unique City Variable detected')

        try:
            encode_state = label_encoder['State'].transform([state])
        except:
            print('Unique State Variable detected')

        to_predict = str(encode_add[0]) + ',' + str(encode_city[0])  + ',' + str(encode_state[0])  + ',' + str(zip) + ',' + str(bathroom) + ',' + str(bedroom) + ',' + str(squareFeet)

        print(to_predict)

        # data = database.child("HouseListing").push({

        #     'address' : address,
        #     'state': state,
        #     'city': city,
        #     'zip': zip,
        #     'squareFeet' : squareFeet,
        #     'bedroom' : bedroom,
        #     'bathroom': bathroom,
        #     'price' : price,
        #     'amenities' : amenities,
        #     'file' : file,
        #     'pricePred' : 0
        # })

        

        return Response('yay')

class getPrediction(APIView):
        
    def post(self, request):
        
        url = os.getenv('AWS_LINK')

        data = JsonResponse({
            'data': '1,1,1,1,1,1,1'
        })

        response = requests.post(url,data=data)

        return Response(response)