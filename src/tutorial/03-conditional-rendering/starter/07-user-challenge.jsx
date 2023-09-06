import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      name: 'xavier',
    })
  }
  const logout = () => {
    setUser(null)
  }
  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4>{`Hello there ${user.name}`}</h4>
          <button type='button' className='btn' onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>{`Please login`}</h4>
          <button type='button' className='btn' onClick={login}>
            Login
          </button>
        </div>
      )}
    </>
  )
}

export default UserChallenge
