import requests

class ResponseManager:
    """
    Used to access RapidAPI APIs
    Serves all generation for House Information page info
    """
    rapidAPIHeaders = {}
    propertyResponseJson = {}
    imagesResponseJson = {}
    zpid = ""

    def __init__(self, zpid):
        self.rapidAPIHeaders["X-RapidAPI-Key"] = "71d69a3ee5mshd556889b8751995p169dc8jsn8f24b3d706b0"
        self.rapidAPIHeaders["X-RapidAPI-Host"] = "zillow-com1.p.rapidapi.com"
        self.zpid = zpid
        self.setPropertyResponseJson()
        self.setImagesResponseJson()


    def unmarshallAddress(self):
        """
        Converts /property endpoint response payload into
        address String

        "address": {
            "city": "San Jose",
            "neighborhood": null,
            "state": "CA",
            "streetAddress": "229 Rayos Del Sol Dr",
            "zipcode": "95116"
        }
        """
        addressJson = self.getPropertyResponseJson()['address']
        streetAddress = addressJson['streetAddress']
        city = addressJson['city']
        state = addressJson['state']
        zipCode = addressJson['zipcode']
        
        unmarshalledAddress = streetAddress + ', ' + city + ', ' + state + ' ' + zipCode
        return unmarshalledAddress

    def setPropertyResponseJson(self): 
        url = "https://zillow-com1.p.rapidapi.com/property"

        queryString = {
            "zpid": self.zpid
        }

        response = requests.request("GET", url, headers=self.rapidAPIHeaders, params=queryString)

        self.propertyResponseJson = response.json()
    
    def getPropertyResponseJson(self):
        return self.propertyResponseJson
    
    def setImagesResponseJson(self):
        url = "https://zillow-com1.p.rapidapi.com/images"

        queryString = {
            "zpid": self.zpid
        }

        response = requests.request("GET", url, headers=self.rapidAPIHeaders, params=queryString)
        
        self.imagesResponseJson = response.json()

    def getImagesResponseJson(self):
        return self.imagesResponseJson
    
    def getNumberOfBedrooms(self):
        return self.propertyResponseJson['bedrooms']

    def getNumberOfBathrooms(self):
        return self.propertyResponseJson['bathrooms']
    
    def getPropertyDescription(self):
        return self.propertyResponseJson['description']
    
    def getLivingAreaValue(self):
        return self.propertyResponseJson['livingAreaValue']




