import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image } from 'react-bootstrap'
import backgroundImage from './Wolliz-1.png'

//navbar component for general pages when logged in
function Navbar() {
  function handleLogOut(event) {
    window.localStorage.removeItem('LoginIn')
    window.location.reload(true)
  }

  return (
    <div
      style={{
        color: 'white',
      }}>
      <nav className='navbar navbar-custom navbar-expand-md'>
        <div className='container-fluid'>
          <div className='navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2'>
            <ul className='navbar-nav me-auto fs-6'>
              <li className='nav-item active'>
                <a className='nav-link' href='../Homepage'>
                  <small>Home</small>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/HouseInfo'>
                  <small>Dashboard</small>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='UserListing'>
                  <small>Add a Property</small>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  <small>FAQ</small>
                </a>
              </li>
            </ul>
          </div>
          <div className='mx-auto order-0'>
            <a className='navbar-brand mx-auto' href='/HomePage'>
              <Image
                src={backgroundImage}
                alt='Logo'
                width='30'
                height='24'
                className='d-inline-block align-text-top'
              />
              Wolliz
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='.dual-collapse2'>
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
          <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
            <ul className='navbar-nav ms-auto'>
            </ul>
            <button
              className='btn me-2'
              id='signOut'
              type='button'
              onClick={(e) => handleLogOut(e)}>
              Sign Out
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
