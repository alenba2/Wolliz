import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SignUpBox(props) {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>Sign Up</Card.Title>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={props.email}
              onChange={(e) => props.handleCallBackEmail(e.target.value)}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={props.password}
              onChange={(e) => props.handleCallBackPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='ReEnterPassword'>
            <Form.Label>Re Enter Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Please Re-enter Password'
              value={props.cpassword}
              onChange={(e) => props.handleCallBackCPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant='primary'
            type='submit'
            onClick={(e) => props.handleCallBackSubmit(e)}>
            Submit
          </Button>

          <br />
          <br />

          <Form.Text>
            <Link to='/'>Have an Account? Sign In</Link>
          </Form.Text>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default SignUpBox
