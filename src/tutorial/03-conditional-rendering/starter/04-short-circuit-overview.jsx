import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('Ana')
  return (
    <>
      <h2>short circuit overview</h2>
      <h5>Falsy OR : {text || 'Hello World'}</h5>
      <h5>Falsy AND : {text && 'Hello World'}</h5>
      <h5>Truthy OR : {name || 'Hello World'}</h5>
      <h5>Truthy AND : {name && 'Hello World'}</h5>
    </>
  )
}
export default ShortCircuitOverview
