import React, { useState } from 'react'
function TaskFourtine() {
    const [value, setValue] = useState(0)
    const handleClick = () => {
        setValue(value + 1)
    }
    const handleClickButton = () => {
        if(value !== 0){            
            setValue(value - 1)
        }
    }
    return (
        <>
            <div className='containar'>
                <div className='row'>
                    <div className='col'>
                        <div className='fs-1 text-center'>{value}</div>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-6 text-end'>
                        <button className='btn btn-success m-3 fs-3 ' onClick={handleClick}>Increment</button>
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-danger text-start mt-3 fs-3' onClick={handleClickButton}>Decrement</button>
                    </div>
                </div>
            </div>
        </>



    )
}

export default TaskFourtine