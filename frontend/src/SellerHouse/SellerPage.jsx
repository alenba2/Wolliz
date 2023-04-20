import SellerBox from './Components/SellerBox'
import './Seller.css'
import Navbars from '../navbars/navbar'
import { Image } from 'react-bootstrap'
import { useRef } from 'react'
import backgroundImage from './Images/image1.jpg'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

function SellerPage() {
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [squareFeet, setSquareFeet] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [bathroom, setBathroom] = useState('')
  const [garage, setGarage] = useState('')
  const [price, setPrice] = useState('')
  const [amenities, setAmenities] = useState('')
  const [file, setFile] = useState('')
  // Used to get information
  // useEffect(() => {
  //   axios
  //     .get('/api/get/')
  //     .then((res) => {
  //       // console.log(res.data[0])

  //       setEmail(res.data[0].Username)
  //       setPassword(res.data[0].Password)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  function handleCallBackAddress(event) {
    setAddress(event)
  }
  function handleCallBackState(event) {
    setState(event)
  }
  function handleCallBackCity(event) {
    setCity(event)
  }
  function handleCallBackZip(event) {
    setZip(event)
  }
  function handleCallBackSquareFeet(event) {
    setSquareFeet(event)
  }
  function handleCallBackBedroom(event) {
    setBedroom(event)
  }
  function handleCallBackBathroom(event) {
    setBathroom(event)
  }
  function handleCallBackGarage(event) {
    setGarage(event)
  }
  function handleCallBackPrice(event) {
    setPrice(event)
  }
  function handleCallBackAmenities(event) {
    setAmenities(event)
  }
  function handleCallBackFile(event) {
    setFile(event)
  }

  // On click will push data to database
  function handleCallBackSubmit() {
    let data = new FormData()

    data.append('address', address)
    data.append('state', state)
    data.append('city', city)
    data.append('zip', zip)
    data.append('squareFeet', squareFeet)
    data.append('bedroom', bedroom)
    data.append('bathroom', bathroom)
    data.append('garage', garage)
    data.append('price', price)
    data.append('amenities', amenities)
    data.append('file', file)

    // Data needs to check if it exist in database
    axios
      .post('api/Sell/', data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }
  // This gets the window's size
  const windowSize = useRef([window.innerWidth, window.innerHeight])
  return (
    <div>
      <Image
        src={backgroundImage}
        style={{
          height: windowSize.current[1],
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
        }}>
        <Navbars />
      </div>

      <div className='SellerSize'>
        <SellerBox 
        address={address}
        state={state}
        city={city}
        zip={zip}
        squareFeet={squareFeet}
        bedroom={bedroom}
        bathroom={bathroom}
        garage={garage}
        price={price}
        amenities={amenities}
        file={file}
        handleCallBackAddress={handleCallBackAddress}
        handleCallBackState={handleCallBackState}
        handleCallBackCity={handleCallBackCity}
        handleCallBackZip={handleCallBackZip}
        handleCallBackSquareFeet={handleCallBackSquareFeet}
        handleCallBackBedroom={handleCallBackBedroom}
        handleCallBackBathroom={handleCallBackBathroom}
        handleCallBackGarage={handleCallBackGarage}
        handleCallBackPrice={handleCallBackPrice}
        handleCallBackAmenities={handleCallBackAmenities}
        handleCallBackFile={handleCallBackFile}
        handleCallBackSubmit={handleCallBackSubmit}
        />
      </div>
    </div>
  )
}

export default SellerPage
