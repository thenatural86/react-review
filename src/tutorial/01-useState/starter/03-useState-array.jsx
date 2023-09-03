import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    const newArray = people.filter((person) => person.id !== id)
    setPeople(newArray)
  }

  const clearList = () => {
    setPeople([])
  }

  return (
    <div>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id}>
            {name} | <button onClick={() => removePerson(id)}>Remove</button>
          </div>
        )
      })}
      <button onClick={() => clearList()}>Clear List</button>
    </div>
  )
}

export default UseStateArray
