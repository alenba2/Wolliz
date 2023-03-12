import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Card } from 'react-bootstrap'

function LoginBox() {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>Log In</Card.Title>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
          <br />
          <br />
          <Form.Text>Dont have a account? Sign up</Form.Text>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LoginBox
