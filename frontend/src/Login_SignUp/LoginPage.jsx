import LoginBox from './Components/LoginBox'
import Navbars from '../navbars/NaviBar'
import './Login.css'
import { Image } from 'react-bootstrap'
import backgroundImage from './Images/Background1.png'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleCallBackEmail(event) {
    setEmail(event)
  }
  function handleCallBackPassword(event) {
    setPassword(event)
  }

  // On click will push data to database
  function handleCallBackSubmit(event) {
    event.preventDefault() // 👈️ prevent page refresh

    const storedData = window.localStorage.getItem('LoginIn')
    console.log(storedData)

    let data = new FormData()

    data.append('email', email)
    data.append('password', password)

    // Data needs to check if it exist in database
    axios
      .post('http://localhost:8000/api/Login/', data)
      .then((res) => {
        console.log(res)

        //saves in local storage
        window.localStorage.setItem('LoginIn', JSON.stringify(res.data))
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
        <Navbars isLoggedIn={false} />
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
