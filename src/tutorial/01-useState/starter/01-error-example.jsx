import { useState } from 'react'

const ErrorExample = () => {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    setCount((prevState) => {
      return prevState + 1
    })
  }

  return (
    <div>
      <h5>{count}</h5>
      <button onClick={increaseCount}>increase</button>
    </div>
  )
}

export default ErrorExample
