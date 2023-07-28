import React from 'react'

function TextareaComponents(props) {
  return (
    <>
    <textarea className={props.className} name={props.name} placeholder={props.placeholder} ></textarea>

    </>
  )
}

export default TextareaComponents