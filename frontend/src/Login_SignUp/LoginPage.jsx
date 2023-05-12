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
  //   let data = new FormData()
  //   data = data.append('data', '1,1,1,1,1,1,1')

  //   axios
  //     .post(
  //       'https://op7v5n6uuk.execute-api.us-east-2.amazonaws.com/getPred',
  //       data,
  //       {
  //         headers: {
  //           'Access-Control-Allow-Origin': '*',
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res)
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
  function handleCallBackSubmit(event) {
    event.preventDefault() // 👈️ prevent page refresh

    let data = new FormData()

    data.append('email', email)
    data.append('password', password)

    // Data needs to check if it exist in database
    axios
      .post('http://localhost:8000/api/Login/', data)
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
