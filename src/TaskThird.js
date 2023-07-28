import React from 'react'
import './TaskThree.css'

function TaskThree(props) {
  return (
    <>
    {/* <div style={{color: props.name == 'Kundan' ? 'red' : 'green'}}>{props.name}</div> */}
    {/* <div style={{color: 'green'}}>{props.he}</div> */}
    
    {/* <div>{props.name === true ? "Kundan" : "Divya"}</div>  */}
    <div className={props.condition === true ? 'sucsses' : 'denger'}>{ props.name}</div>
    {/* <div className='she'>divya</div> */}

    {/* { true ? "Yes": "No"} */}

    </>
  )
}

export default TaskThree