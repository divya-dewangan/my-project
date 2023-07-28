import React from 'react'
import './TaskOne.css'

function TaskOne(props) {
  return (    
    <>
    <div>{props.task || "No Props Found"}</div>
    <div className='div'>{props.name || "No Props Found"}</div>
    </>
  )
}

export default TaskOne