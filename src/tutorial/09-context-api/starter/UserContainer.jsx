import React from 'react'

const UserContainer = ({ name, logout }) => {
  return (
    <>
      <div>{name ? name : 'Please login'}</div>
      <button onClick={logout}>Click me</button>
    </>
  )
}

export default UserContainer
