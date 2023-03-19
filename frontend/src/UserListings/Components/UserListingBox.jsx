import { Card, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import image from '../Images/Background2.png'

function UserListingBox() {
  return (
    <Card style={{ width: '100rem' }}>
      <Card.Body>
        <Row>
          <Col>
            <Image src={image} style={{ height: '200px', width: '300px' }} />
          </Col>
          <Col>
            <Card.Title>House Title</Card.Title>
            <div>Street: 9292 Washington </div>
          </Col>
          <Col>
            <Card.Title>Price: $232322</Card.Title>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default UserListingBox
