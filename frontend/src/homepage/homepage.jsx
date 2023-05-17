import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbars from '../navbars/navbar';
import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './images/Background1.png';
import { Image } from 'react-bootstrap';

export default function Homepage() {
  const [searchAddress, setSearchAddress] = useState('');
  const navigate = useNavigate(); // Access the navigation object

  const fetchData = async (address) => {

    /*
    const options = {
      method: 'GET',
      url: 'https://zillow56.p.rapidapi.com/search',
      params: {
        location: address
      },
      headers: {
        'X-RapidAPI-Key': '8544fe0dd2msh58208d68e7c05f4p1442dbjsneeb6753d4e2a',
        'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
      }
    };
    */

    try {
      //const response = await axios.request(options);
      //const data = response.data;
      //console.log(data); // Output the data to the console for testing
      navigate(`/HouseInfo?address=${encodeURIComponent(address)}`); // Redirect to the HouseInfo page with the searchAddress as a URL parameter
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchData(searchAddress);
  };

  return (
    <div id="homecontainer">
      <Navbars />

      <div className="imageContainer">
        <Image
          src={backgroundImage}
          style={{
            height: '50%',
            width: '100%',
            position: 'relative',
            top: 0,
            left: 0
          }}
        />
        <h1 id="greeting">Make a housing estimate today.</h1>

        <form onSubmit={handleSearch} className="search">
          <div className="searchInputs">
            <input
              type="text"
              placeholder="Search an Address"
              value={searchAddress}
              onChange={(event) => setSearchAddress(event.target.value)}
            />
            <button type="submit" className="searchIcon">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
