import SignUpBox from './Components/SignUpBox'
import Navbars from '../navbars/navbar'
import './Login.css'
import { Image } from 'react-bootstrap'
import backgroundImage from './Images/Background2.png'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  function handleCallBackEmail(event) {
    setEmail(event)
  }
  function handleCallBackPassword(event) {
    setPassword(event)
  }
  function handleCallBackCPassword(event) {
    setCPassword(event)
  }

  // On click will push data to database

  function handleCallBackSubmit() {
    if (!(password === cpassword)) {
      console.log('Passwords do not match')
      return
    }
    if (!email.includes('.') || !email.includes('@')) {
      console.log('Email is not valid')
      return
    }

    // both pass checks

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
        <SignUpBox
          email={email}
          password={password}
          cpassword={cpassword}
          handleCallBackEmail={handleCallBackEmail}
          handleCallBackPassword={handleCallBackPassword}
          handleCallBackCPassword={handleCallBackCPassword}
          handleCallBackSubmit={handleCallBackSubmit}
        />
      </div>
    </div>
  )
}

export default LoginPage
