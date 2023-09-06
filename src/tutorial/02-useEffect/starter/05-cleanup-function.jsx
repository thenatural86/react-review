import { useState, useEffect } from 'react'

const CleanupFunction = () => {
  const [value, setValue] = useState(false)

  return (
    <>
      {value ? <div>It's the first Yolo</div> : <SecondComponent />}
      <button type='button' className='btn' onClick={() => setValue(!value)}>
        Toggle State
      </button>
    </>
  )
}

const SecondComponent = () => {
  useEffect(() => {
    console.log('2nnnnnnnddddd')
  }, [])
  return <></>
}

export default CleanupFunction
