import React from 'react'
import { Button } from 'react-bootstrap'

function ButtonComponents(props) {
  return (
    <>
      <Button type={props.type} variant={props.variant}>{props.name}</Button>
    </>
  )
}

export default ButtonComponents