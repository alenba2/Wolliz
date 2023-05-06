import Navbars from '../navbars/navbar'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import house from './images/house.webp'
import { useEffect, useState } from 'react';
import {
  retrieveData,
  displayData,
} from '../apis/getPropertyAPI';




export default function HouseInfo() {

  const [propertyData, setPropertyData] = useState({});

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveData;
        //console.log(data);
        setPropertyData(data); // assuming you have a state variable named propertyData to store the retrieved data
        //console.log(propertyData);
        displayData(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  

  return (

    
    <div className='houseinfo'>
      <Navbars />

      <div className='container'>
        <div className='d-flex justify-content-evenly'>
          <div id='houseImage' className='flex'>
            <img
              className='img-fluid rounded img-thumbnail'
              src={house}
              alt='House'
            />
          </div>

          <div className='flex'>
            {/* text for house info */}
            <h1 className='text-center fw-bold'>
              House Information
              <br />
            </h1>
            <br />
            <p id='address' className='text-center fs-5 fw-semibold'>
              1833 Fake Street, Montpelier, Vermont, 938489 
            </p>
            <br />
            <p id='zestimate' className='text-center fs-5 fw-semibold'>
              Predicted Price: $600,000
            </p>
            <p id='livingAreaSpace' className='text-center fs-5 fw-semibold'> 
              Square Feet: 2809
            </p>
            <p id='price' className='text-center fs-5 fw-semibold'>
              Actual Price: $543,400
            </p>
            <br />
            <p id='bedrooms' className='text-center fs-5 fw-semibold'>Bedrooms</p>
            <p id='bathrooms' className='text-center fs-5 fw-semibold'>2 Bathrooms</p>
            <p className='text-center fs-5 fw-semibold'>1 Garage</p>
            <br />

            {/*buttons */}
            <div className='d-grid gap-2 d-md-flex justify-content-center'>
              <button
                id='inquireButton'
                className='btn btn-primary'
                type='button'>
                Inquire
              </button>
              <button id='tourButton' className='btn btn-primary' type='button'>
                Tour
              </button>
            </div>
          </div>
        </div>

        <div className='d-flex mt-4 justify-content-evenly'>
          <ul className='list-group'>
            <p className='fs-6 fw-bold'>Key Features</p>
            <li className='list-group-item'>Pet Friendly</li>
            <li className='list-group-item'>Shared Laundry</li>
            <li className='list-group-item'>Covered Parking</li>
          </ul>

          <ul className='list-group'>
            <p className='fs-6 fw-bold'>Building Anemities</p>
            <li className='list-group-item'>Swimming Pool</li>
          </ul>

          <ul className='list-group'>
            <p className='fs-6 fw-bold'>Services & Facilities</p>
            <li className='list-group-item'>Shared Laundry</li>
            <li className='list-group-item'>Storage Space</li>
          </ul>

          <ul className='list-group'>
            <p className='fs-6 fw-bold'>Special Features</p>
            <li className='list-group-item'>Courtyard</li>
            <li className='list-group-item'>Freeway Access</li>
            <li className='list-group-item'>Large Closets</li>
            <li className='list-group-item'>TV Lounge</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
