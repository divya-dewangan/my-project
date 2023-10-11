import React from 'react'

function IncrementTwoSecondClild(props) {
    const handlerIncrement = () => {
        props.sendIncrementClid()
    }

    const handlerdicrement = () => {
        props.senddicrementClid()
    }
  return (
    <>
    <div>{props.flag}</div>
            <button className='btn btn-success' onClick={handlerIncrement}>Increment</button>
            <button className='btn btn-danger' onClick={handlerdicrement}>Dicrement</button>

    </>
  )
}

export default IncrementTwoSecondClild