import UserListingBox from './Components/UserListingBox'
import Navbars from '../navbars/navbar'
import { Row, Col } from 'react-bootstrap'
import './BoxListing.css'

function UserListingPage() {
  // This gets the window's size
  return (
    <>
      <div
        style={{
          position: 'relative',
        }}>
        <Navbars />
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
