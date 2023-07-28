import React, { useState } from 'react'
function TaskTen() {
    const [flag,setFlag]=useState(false)

    const hendleElemant = () => {
        setFlag( !flag)

    }
    
    
    return (
        <>
       {/* {flag ? <div>heloo...i am Divya </div> : " Divya... you are Kundan's wife?"} */}

       {flag && <div>heloo...i am Divya </div> }
       {!flag && <div> Divya... you are Kundan's wife?</div>}
       <button className='btn btn-primary' onClick={hendleElemant}> Click</button>
       </>
    )
}

export default TaskTen