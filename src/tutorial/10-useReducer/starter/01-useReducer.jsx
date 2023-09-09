import React, { useReducer } from 'react'
import { data } from '../../../data'

const defaultState = {
  people: data,
}

const reducer = (state, action) => {
  if (action.type === 'CLEAR LIST') {
    return { ...state, people: [] }
  }
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
  }

  const clearList = () => {
    dispatch({ type: 'CLEAR LIST' })
  }

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.people.length > 0 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={() => setPeople(data)}
        >
          reset items
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
