import React from 'react'
import ButtonComponents from './ReusableComponent/ButtonComponents'

function PropsDeling() {
  return (
    <>
    <ButtonComponents variant='primary' name='Click'/>
    <ButtonComponents variant='success' name='Click'/>
    <ButtonComponents variant='danger' name='Click'/>
    <ButtonComponents variant='info' name='Click'/>
    <ButtonComponents variant='light' name='Click'/>
    <ButtonComponents variant='secondary' name='Click'/>
    </>
  )
}

export default PropsDeling