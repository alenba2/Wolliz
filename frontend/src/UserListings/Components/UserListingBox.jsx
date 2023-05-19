import { Card, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import image from '../Images/Background2.png'

function UserListingBox(props) {
  return (
    <Card style={{ width: '100rem' }}>
      <Card.Body>
        <Row>
          <Col>
            <Image src={image} style={{ height: '200px', width: '300px' }} />
          </Col>
          <Col>
            <Card.Title>Wolliz House ID: {props.houseID}</Card.Title>
            <div>Address: {props.street} </div>
            <div>State: {props.state} </div>
            <div>Zip: {props.zip} </div>
            <div>Square Feet: {props.sqft} </div>
          </Col>
          <Col>
            <Card.Title>Price: ${props.price}</Card.Title>
            <Card.Title>Willoz's Price: ${props.pricePred}</Card.Title>
            <div>Bedroom: {props.bedroom} </div>
            <div>Bathroom: {props.bathroom} </div>
            <div>Amenities: {props.amenities} </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default UserListingBox
