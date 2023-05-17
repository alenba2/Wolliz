import SignedIn from './Components/navbar'
import NotSignedIn from './Components/navbar2'

function NaviBar(props) {
  const isLoggedIn = props.isLoggedIn

  if (isLoggedIn) {
    return <SignedIn />
  }
  return <NotSignedIn />
}

export default NaviBar
