import SellerBox from './Components/SellerBox'
import './Seller.css'
import Navbars from '../navbars/navbar'
import { Image } from 'react-bootstrap'
import { useRef } from 'react'
import backgroundImage from './Images/image1.jpg'

function SellerPage() {
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

      <div className='SellerSize'>
        <SellerBox />
      </div>
    </div>
  )
}

export default SellerPage
