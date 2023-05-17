import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchBar({ placeholder, data }) {
    const [address, setAddress] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Make API request using the `address` value
      fetchData(address);
    };
  
    const fetchData = async (address) => {
        try {
          const response = await axios.get(
            `https://zillow56.p.rapidapi.com/GetSearchResults?address=${encodeURIComponent(address)}`,
            {
              headers: {
                'X-RapidAPI-Key': '71d69a3ee5mshd556889b8751995p169dc8jsn8f24b3d706b0',
                'X-RapidAPI-Host': 'zillow56.p.rapidapi.com',
              },
            }
          );
          const data = response.data; // Process the received data as required
          console.log(data); // Output the data to the console for testing
        } catch (error) {
          console.error(error);
        }
      };
      
      
  
    return (
      <div className="search">
        <form onSubmit={handleSubmit}>
          <div className="searchInputs">
            <input
              type="text"
              placeholder={placeholder}
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <div className="searchIcon"></div>
          </div>
        </form>
      </div>
    );
  }
  