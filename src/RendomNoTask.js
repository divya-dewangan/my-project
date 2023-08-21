import React, { useState } from 'react'

function RendomNoTask() {
    const [flag, setFlag] = useState("")

    const nohandler = () => {
        console.log('heyyy')
        var number = Math.floor(Math.random() * (1066555 - 155 + 155)) + 5551;
        console.log('kjfsdiofjeoj')
        setFlag(number)
    }
    return (
        <>
            <div>{flag}</div>
            <button className='btn btn-info m-5' onClick={nohandler}>Click</button>
        </>
    )
}

export default RendomNoTask
