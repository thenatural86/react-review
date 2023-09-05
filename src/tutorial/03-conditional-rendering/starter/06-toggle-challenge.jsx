import { useState } from 'react'

const ToggleChallenge = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggleDiv = () => {
    setIsToggled(!isToggled)
  }
  return (
    <div>
      <h2>toggle challenge</h2>
      <section>{isToggled && <h4>Here I am!</h4>}</section>
      <button type='button' className='btn' onClick={toggleDiv}>
        Click Me!
      </button>
    </div>
  )
}

export default ToggleChallenge
