import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const submitHandler = (e) => {
    e.preventDefault()
    if (!name) return
    e.target.value
    const fakeId = Date.now()
    const newUser = {
      id: fakeId,
      name,
    }
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    setName('')
  }

  return (
    <div onSubmit={submitHandler}>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      <h4>
        {users.map((obj) => {
          const { name, id } = obj
          return <div key={id}>{name}</div>
        })}
      </h4>
    </div>
  )
}
export default UserChallenge
