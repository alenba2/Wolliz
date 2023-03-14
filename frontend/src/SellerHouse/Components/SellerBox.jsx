import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Card } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SellerBox() {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>Listing Form</Card.Title>
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId='formBasicAddress'>
            <Form.Label>Street Address</Form.Label>
            <Form.Control type='address' placeholder='Enter Street Address' />
          </Form.Group>

          <Form.Group as={Col} controlId='formBasicState'>
            <Form.Label>State</Form.Label>
            <Form.Control type='state' placeholder='Enter State' />
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId='formBasicCity'>
            <Form.Label>City</Form.Label>
            <Form.Control type='city' placeholder='Enter City' />
          </Form.Group>
          
          <Form.Group as={Col} controlId='formBasicZip'>
            <Form.Label>Zip Code/Postcode</Form.Label>
            <Form.Control type='zip' placeholder='Enter Zip/post Code' />
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId='formBasicSQFT'>
            <Form.Label>Square Feet</Form.Label>
            <Form.Control type='squareFeet' placeholder='Enter Home Square Feet ' />
          </Form.Group>

          <Form.Group as={Col} controlId='formBasicBedroom'>
            <Form.Label>Number of Bedrooms</Form.Label>
            <Form.Control type='bedroom' placeholder='Enter # of Bedrooms in home' />
          </Form.Group>
          </Row>

          <Row className="mb-3">    
          <Form.Group as={Col} controlId='formBasicBathroom'>
            <Form.Label>Number Bathrooms</Form.Label>
            <Form.Control type='bathroom' placeholder='Enter # of Bathrooms in home' />
          </Form.Group>

          <Form.Group as={Col} controlId='formBasicGarage'>
            <Form.Label>Number of Garages</Form.Label>
            <Form.Control type='garage' placeholder='Enter # of garages' />
          </Form.Group>

          </Row>

          <Form.Group className='mb-3' controlId='formBasicPrice'>
            <Form.Label>Listing Price</Form.Label>
            <Form.Control type='price' placeholder='Enter desired listing price' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicAmenities'>
            <Form.Label>Other Amenities</Form.Label>
            <Form.Control type='amenities' placeholder='Enter other house ameniies' />
          </Form.Group>

          <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Upload Images</Form.Label>
          <Form.Control type="file" multiple />
          </Form.Group>
          <br />
          <br />
          <Button variant='primary' type='submit'>
            List
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default SellerBox
