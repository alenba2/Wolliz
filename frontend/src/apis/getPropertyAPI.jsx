let getPropertyResponse = async () => {
    const url = 'https://zillow-com1.p.rapidapi.com/property?zpid=79842311';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '71d69a3ee5mshd556889b8751995p169dc8jsn8f24b3d706b0',
            'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
}

let getPropertyImagesResponse = async () => {
    const url = 'https://zillow-com1.p.rapidapi.com/images?zpid=79842311';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '71d69a3ee5mshd556889b8751995p169dc8jsn8f24b3d706b0',
            'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
}

let getPropertyAddress =  async (propertyResponse) => {
    const address = propertyResponse['address'];
    let streetAddress = address['streetAddress'];
    let city = address['city'];
    let state = address['state'];
    let zipcode = address['zipcode'];
    let displayAddress = streetAddress + ", " + city + ", " + state + " " + zipcode;
    return displayAddress;
}
let getPropertyImage = async (propertyResponse) => {
    return propertyResponse['images'];
}
let getPropertyBedrooms = async (propertyResponse) => {
    return propertyResponse['bedrooms'];
}

let getPropertyBathrooms = async (propertyResponse) => {
    return propertyResponse['bathrooms'];
}

let getPropertyDescription = async (propertyResponse) => {
    return propertyResponse['description'];
}

let getPropertyLivingAreaValue = async (propertyResponse) => {
    return propertyResponse['livingAreaValue'];
}

let getPropertyPrice = async (propertyResponse) => {
    return propertyResponse['price'];
}

let getPropertyZestimate = async (propertyResponse) => {
    return propertyResponse['zestimate'];
}



let retrieveData = async () => {
    let propertyResponseJson = "";
    let propertyImagesJson = "";
    let imgSrc = [];
    let bedrooms = "";
    let bathrooms = "";
    let livingAreaValue = "";
    let address = "";
    let price = "";
    let zestimate = "";
    let details = {};
    await getPropertyResponse()
        .then((promisedData) => {
            propertyResponseJson = promisedData;
        })
        .catch((err) => {
            console.log(err)
        });
    await getPropertyImagesResponse()
        .then((promisedData) => {
            propertyImagesJson = promisedData;
        })
        .catch((err) => {
            console.log(err)
        });
    console.log(propertyResponseJson);
    console.log(propertyImagesJson);
    await getPropertyImage(propertyImagesJson).then((response) => {
        for (let i = 0; i < response.length; i++) {
            imgSrc.push(response[i]);
        }
    });
    await getPropertyBedrooms(propertyResponseJson).then((response) => {
        bedrooms = response;
    });
    await getPropertyBathrooms(propertyResponseJson).then((response) => {
        bathrooms = response;
    });
    await getPropertyLivingAreaValue(propertyResponseJson).then((response) => {
        livingAreaValue = response;
    });
    await getPropertyAddress(propertyResponseJson).then((response) => {
        address = response;
    });
    await getPropertyPrice(propertyResponseJson).then((response) => {
        price = response;
    });
    await getPropertyZestimate(propertyResponseJson).then((response) => {
        zestimate = response;
    });
    details['imgSrc'] = imgSrc;
    details['bedrooms'] = bedrooms;
    details['bathrooms'] = bathrooms;
    details['livingAreaValue'] = livingAreaValue;
    details['address'] = address;
    details['price'] = price;
    details['zestimate'] = zestimate;
    displayData(details);
}

let displayData = (retrievedData) => {
    /*
     {
        'bedrooms': <value>,
        'bathrooms': <value>,
        'livingAreaValue': <value>,
        'address': <value>,
        'price': <value>,
        'zestimate': <value>
     }
     */
    console.log(retrievedData);

    /*
    imgSrc is an array of all house photos
    some have 1 photo some have up to 50
    use imgSrc however you want, 
    ex: 
    document.getElementbyId('houseImg').src = imgSrc[0];
    imgSrc[0] will be the first image in the array which is usually
    the image Zillow uses on their main house page
    */

    let imgSrc = retrievedData['imgSrc'];
    let bedrooms = retrievedData['bedrooms'];
    let bathrooms = retrievedData['bathrooms'];
    let squareFootage = retrievedData['livingAreaValue'];
    let address = retrievedData['address'];
    let price = priceToString(retrievedData['price']);
    let zillowEstimate = priceToString(retrievedData['zestimate']);

    document.getElementById('h_img').src = imgSrc[0];
    document.getElementById('bedrooms').innerHTML = bedrooms + " Bedrooms";
    document.getElementById('bathrooms').innerHTML = bathrooms + " Bathrooms";
    document.getElementById('livingAreaSpace').innerHTML = squareFootage + " sqft";
    document.getElementById('address').innerHTML = address;
    document.getElementById('price').innerHTML = "Listed price: " + price;
    document.getElementById('zestimate').innerHTML = "Zillow Estimate: " + zillowEstimate;
}   

let priceToString = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
      return formatter.format(price);
}

export {retrieveData, displayData}