import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Luke',
    age: 28,
    hobby: 'Traveling',
  })

  const displayPerson = () => {
    setPerson({
      name: 'Erin',
      age: 24,
      hobby: 'being with Philip',
    })
  }
  const { name, age, hobby } = person
  return (
    <div>
      <h2>Individual</h2>
      <h5>{name}</h5>
      <h5>{age}</h5>
      <h5>{hobby}</h5>

      <button className='btn' onClick={displayPerson}>
        Change Now!
      </button>
    </div>
  )
}

export default UseStateObject
