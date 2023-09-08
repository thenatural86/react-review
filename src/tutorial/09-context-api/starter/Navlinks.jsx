import React from 'react'
import UserContainer from './UserContainer'

const Navlinks = ({ name, logout }) => {
  return (
    <div>
      <UserContainer name={name} logout={logout} />
    </div>
  )
}

export default Navlinks
