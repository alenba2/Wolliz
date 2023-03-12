import LoginBox from './Components/LoginBox'
import './Login.css'
import { Image } from 'react-bootstrap'
import backgroundImage from './Images/Background1.png'
import { useRef } from 'react'

function LoginPage() {
  // This gets the window's size
  const windowSize = useRef([window.innerWidth, window.innerHeight])
  return (
    <div>
      <Image
        src={backgroundImage}
        style={{
          height: windowSize.current[1],
          width: '100%',
        }}
      />
      <div className='LoginSize'>
        <LoginBox />
      </div>
    </div>
  )
}

export default LoginPage
