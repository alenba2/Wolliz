import UserListingBox from './Components/UserListingBox'
import Navbars from '../navbars/NaviBar'
import { Row, Col } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react'
import './BoxListing.css'
import axios from 'axios'

function UserListingPage() {
  // This gets the window's size
  const [loading, setLoading] = useState(true)

  const [loggedIn, setLogin] = useState(false)
  const [saveData, setSaveData] = useState([])

  useEffect(() => {
    const storedData = window.localStorage.getItem('LoginIn')

    if (storedData != null) {
      setLogin(true)
    }

    let data = new FormData()
    data.append('id', storedData)

    // Data needs to get House Data in database
    const response = axios
      .post('http://localhost:8000/api/getHouseInfo/', data)
      .then((res) => {
        setSaveData(res.data)
        console.log(saveData)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  const listHouse = saveData.map((info) => (
    <Col style={{ paddingTop: '2%' }}>
      <UserListingBox
        street={info.address}
        price={info.price}
        state={info.state}
        zip={info.zip}
        sqft={info.squareFeet}
        bedroom={info.bedroom}
        bathroom={info.bathroom}
        amenities={info.amenities}
        pricePred={info.pricePred}
        houseID={info.id_House}
      />
    </Col>
  ))

  if (loading) {
    return <div></div>
  } else {
    return (
      <>
        <div
          style={{
            position: 'relative',
          }}>
          <Navbars isLoggedIn={loggedIn} />
        </div>

        <Row className='Listing' style={{ paddingTop: '5%' }}>
          {listHouse}
        </Row>
      </>
    )
  }
}

export default UserListingPage
