import { useState, createContext } from 'react'
import Navlinks from './Navlinks'

export const NavbarContext = createContext()

const Navbar = () => {
  const [user, setUser] = useState({ name: 'something' })

  const logout = () => {
    setUser({ name: null })
  }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div>
        <Navlinks {...user} logout={logout} />
      </div>
    </NavbarContext.Provider>
  )
}

export default Navbar
