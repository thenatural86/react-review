import { useState } from 'react'
import { people } from '../../../data'
const List = () => {
  const [peoples, setPeoples] = useState(people)

  const person = peoples.map((person) => {
    const { id, name } = person
    return (
      <ul>
        <li key={id}>{name}</li>
      </ul>
    )
  })
  return <>{person}</>
}

export default List
