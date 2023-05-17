import UserListingBox from './Components/UserListingBox'
import Navbars from '../navbars/NaviBar'
import { Row, Col } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react'
import './BoxListing.css'

function UserListingPage() {
  // This gets the window's size
  const [loggedIn, setLogin] = useState(false)

  useEffect(() => {
    const storedData = window.localStorage.getItem('LoginIn')

    if (storedData != null) {
      console.log('hit')
      setLogin(true)
    }
  }, [])

  return (
    <>
      <div
        style={{
          position: 'relative',
        }}>
        <Navbars isLoggedIn={loggedIn} />
      </div>

      <Row className='Listing' style={{ paddingTop: '7%' }}>
        <Col>
          <UserListingBox />
        </Col>
        <Col style={{ paddingTop: '2%' }}>
          <UserListingBox />
        </Col>
      </Row>
    </>
  )
}

export default UserListingPage
