import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Card } from 'react-bootstrap'

function LoginBox() {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>Sign Up</Card.Title>
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

          <Form.Group className='mb-3' controlId='ReEnterPassword'>
            <Form.Label>Re Enter Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Please Re-enter Password'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>

          <br />
          <br />

          <Form.Text>Have an Account? Sign In</Form.Text>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LoginBox
