import LoginBox from './Components/LoginBox'
import Navbars from '../navbars/navbar'
import './Login.css'
import { Image } from 'react-bootstrap'
import backgroundImage from './Images/Background1.png'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // useEffect(() => {
  //   axios
  //     .get('/api/todos/')
  //     .then((res) => {
  //       console.log(res.data[0])

  //       setUsername(res.data[0].Username)
  //       setPassword(res.data[0].Password)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  // This gets the window's size
  const windowSize = useRef([window.innerWidth, window.innerHeight])
  return (
    <div>
      <Image
        src={backgroundImage}
        style={{
          height: windowSize.current[1],
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
        }}>
        <Navbars />
      </div>

      <div className='LoginSize'>
        <LoginBox username={username} password={password} />
      </div>
    </div>
  )
}

export default LoginPage
