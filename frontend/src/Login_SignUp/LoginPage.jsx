import LoginBox from './Components/LoginBox'
import Navbars from '../navbars/navbar'
import './Login.css'
import { Image } from 'react-bootstrap'
import backgroundImage from './Images/Background1.png'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Used to get information
  // useEffect(() => {
  //   axios
  //     .get('/api/get/')
  //     .then((res) => {
  //       // console.log(res.data[0])

  //       setEmail(res.data[0].Username)
  //       setPassword(res.data[0].Password)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  function handleCallBackEmail(event) {
    setEmail(event)
  }
  function handleCallBackPassword(event) {
    setPassword(event)
  }

  // On click will push data to database
  function handleCallBackSubmit() {
    let data = new FormData()

    data.append('email', email)
    data.append('password', password)

    axios
      .post('api/push/', data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

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
        <LoginBox
          email={email}
          password={password}
          handleCallBackEmail={handleCallBackEmail}
          handleCallBackPassword={handleCallBackPassword}
          handleCallBackSubmit={handleCallBackSubmit}
        />
      </div>
    </div>
  )
}

export default LoginPage
