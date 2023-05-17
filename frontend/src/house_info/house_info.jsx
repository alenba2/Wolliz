import React, { useEffect, useState } from 'react';
import Navbars from '../navbars/navbar';
import house from './images/house.webp';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { priceToString } from '../apis/getPropertyAPI';
import './globals.css';

export default function HouseInfo() {
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const address = searchParams.get('address');
  


    const fetchData = async (address) => {
      // Replace this with your own data fetching logic
      // For testing purposes, we'll simulate fetching data with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const options = {
        method: 'GET',
        url: 'https://zillow56.p.rapidapi.com/search',
        params: {
          location: address,
        },
        headers: {
          'X-RapidAPI-Key': '71d69a3ee5mshd556889b8751995p169dc8jsn8f24b3d706b0',
          'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        },
      };
    
      try {
        const response = await axios.request(options);
        const data = response.data;
        console.log(data); // Output the data to the console for testing

            // Get the first photo from the hugePhotos array
        const photo = data['big'][0]['url'];
        console.log(photo);

    // Extract the image URL
    //const imageUrl = photo.hiResImageLink || photo.desktopWebHdpImageLink;
    
        // Parse the JSON response and populate the houseData object
        const houseData = {
          imgSrc: photo,
          bedrooms: data.bedrooms,
          bathrooms: data.bathrooms,
          squareFootage: data.livingArea,
          address: data.address.streetAddress + ', ' + data.city + ', ' + data.state + ' ' + data.zipcode,
          price: priceToString(data.price),
          zillowEstimate: priceToString(data.zestimate),
        };
    
        setData(houseData);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchData(address);
  }, [location.search]);

  const firstImage = data?.imgSrc|| house;

  return (
    <div className="houseinfo">
      <Navbars />

      <div className="container">
        <div className="d-flex justify-content-evenly">
          <div id="houseImage" className="flex">
            <img
              id="h_img"
              className="img-fluid rounded img-thumbnail"
              src={firstImage}
              alt="House"
            />
          </div>

          <div className="flex">
            <h1 className="text-center fw-bold">House Information</h1>
            <br />
            <p id="address" className="text-center fs-5 fw-semibold">
              {data?.address || 'Loading...'}
            </p>
            <br />
            <p id="zestimate" className="text-center fs-5 fw-semibold">
              Predicted Price: {data?.zillowEstimate || 'Loading...'}
            </p>
            <p id="livingAreaSpace" className="text-center fs-5 fw-semibold">
              Square Feet: {data?.squareFootage || 'Loading...'}
            </p>
            <p id="price" className="text-center fs-5 fw-semibold">
              Actual Price: {data?.price || 'Loading...'}
            </p>
            <br />
            <p id="bedrooms" className="text-center fs-5 fw-semibold">
              {data?.bedrooms} Bedrooms
            </p>
            <p id="bathrooms" className="text-center fs-5 fw-semibold">
              {data?.bathrooms} Bathrooms
            </p>
            <p className="text-center fs-5 fw-semibold">1 Garage</p>
            <br />

            <div className="d-grid gap-2 d-md-flex justify-content-center">
              <button id="inquireButton" className="btn btn-primary" type="button">
                Inquire
              </button>
              <button id="tourButton" className="btn btn-primary" type="button">
                Tour
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex mt-4 justify-content-evenly">
          <ul className="list-group">
            <p className="fs-6 fw-bold">Key Features</p>
            <li className="list-group-item">Pet Friendly</li>
            <li className="list-group-item">Shared Laundry</li>
            <li className="list-group-item">Covered Parking</li>
          </ul>

          <ul className="list-group">
            <p className="fs-6 fw-bold">Building Amenities</p>
            <li className="list-group-item">Swimming Pool</li>
          </ul>

          <ul className="list-group">
            <p className="fs-6 fw-bold">Services & Facilities</p>
            <li className="list-group-item">Shared Laundry</li>
            <li className="list-group-item">Storage Space</li>
          </ul>

          <ul className="list-group">
            <p className="fs-6 fw-bold">Special Features</p>
            <li className="list-group-item">Courtyard</li>
            <li className="list-group-item">Freeway Access</li>
            <li className="list-group-item">Large Closets</li>
            <li className="list-group-item">TV Lounge</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
