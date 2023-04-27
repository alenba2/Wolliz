import Navbars from '../navbars/navbar'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './searchbar'
import backgroundImage from './images/Background1.png'
import { Image } from 'react-bootstrap'

export default function homepage()
{
    return (
        <div id='homecontainer'>

            <Navbars />

            <div className="imageContainer">

            <Image
        src={backgroundImage}
        style={{
          height: window/2,
          width: '100%',
          position: 'relative',
          top: 0,
          left: 0,
        }}
      />
            <h1 id='greeting'>Make a housing estimate today.</h1>

            <SearchBar placeholder="Search an Address" data ={null} />


            </div>









        




        </div>
    )
}