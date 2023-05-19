import LoginPage from './Login_SignUp/LoginPage'
import SignUpPage from './Login_SignUp/SignUpPage'
import SellerPage from './SellerHouse/SellerPage'
import UserListingPage from './UserListings/UserListingPage'
import HouseInfo from './house_info/house_info'
import Homepage from './homepage/homepage'
import Splash from './splash/splash'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      {/* On Boot */}
      <Route path='/' exact element={<LoginPage />} />
      {/* Other Site */}

      <Route path='/SignUp' element={<SignUpPage />} />
      <Route path='/SellerPage' element={<SellerPage />} />
      <Route path='/UserListing' element={<UserListingPage />} />
      <Route path='/HouseInfo' element={<HouseInfo />} />
      <Route path='/Homepage' element={<Homepage />} />
      <Route path='/Splash' element={<Splash />} />

      {/* Error Case */}
      {/* <Route element={<LoginPage />} /> */}
    </Routes>
  )
}

export default App
