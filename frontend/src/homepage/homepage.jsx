import Navbars from '../navbars/NaviBar'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './searchbar'
import backgroundImage from './images/Background1.png'
import { useRef, useState, useEffect } from 'react'
import { Image } from 'react-bootstrap'

export default function Homepage() {
  const [loggedIn, setLogin] = useState(false)

  useEffect(() => {
    const storedData = window.localStorage.getItem('LoginIn')

    if (storedData != null) {
      console.log('hit')
      setLogin(true)
    }
  }, [])

  return (
    <div id='homecontainer'>
      <Navbars isLoggedIn={loggedIn} />

      <div className='imageContainer'>
        <Image
          src={backgroundImage}
          style={{
            height: window / 2,
            width: '100%',
            position: 'relative',
            top: 0,
            left: 0,
          }}
        />
        <h1 id='greeting'>Make a housing estimate today.</h1>

        <SearchBar placeholder='Search an Address' data={null} />
      </div>
    </div>
  )
}
