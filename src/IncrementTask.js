import React, { useState } from 'react'
import ViewIncrement from './ChildComponent/ViewIncrement'

function IncrementTask() {
  const [value, setValue] = useState(0)
  const clickHandler = () => {
    setValue(value + 1)
  }

  const dicrimentHandler = () => {
    setValue(value - 1)
  }

  return (
    <>
      <ViewIncrement value={value} />
      <button className='btn btn-info' onClick={clickHandler}>
        Increment
      </button>
      <button className='btn btn-danger mx-2' onClick={dicrimentHandler}>Dicrement</button>
    </>
  )
}

export default IncrementTask
