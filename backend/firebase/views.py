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

            return Response('Success: User has been found')

        return Response('Error: User does not exist or Password is not correct')


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
        