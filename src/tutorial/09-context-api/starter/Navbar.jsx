import { useState } from 'react'
import Navlinks from './Navlinks'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'something' })

  const logout = () => {
    setUser({ name: null })
  }
  return (
    <div>
      <Navlinks {...user} logout={logout} />
    </div>
  )
}

export default Navbar
