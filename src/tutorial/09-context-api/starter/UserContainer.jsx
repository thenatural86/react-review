import { useContext } from 'react'
import { NavbarContext } from './Navbar'

const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext)

  return (
    <>
      <div>{user ? user?.name : 'Please login'}</div>
      <button onClick={logout}>Click me</button>
    </>
  )
}

export default UserContainer
