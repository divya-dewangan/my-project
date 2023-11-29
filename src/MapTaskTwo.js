import React, { useState } from 'react'

function MapTaskTwo() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [mono, setMono] = useState("")
    const [vlaue, setValue] = useState(false)

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
    }

    const monoHandler = (e) => {
        setMono(e.target.value)
    }

    const submitHandler = () => {
        setValue(prev => !prev)
    }
    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='fs-3 p-3'>INPUT</div>
                    <input type='text' placeholder='Enter your name' value={name} onChange={nameHandler} className='form-control w-25 my-2' />
                    <input type='text' placeholder='Enter your Age' value={age} onChange={ageHandler} className='form-control w-25 my-2' />
                    <input type='text' placeholder='Enter your Mo.No' value={mono} onChange={monoHandler} className='form-control w-25 my-2' />
                    <buton className='btn btn-info' onClick={submitHandler} >Submit</buton>
                </div>
                <div className='col-md-6'>
                    <div className='fs-3 p-3'>OUTPUT</div>
                   {vlaue &&
                   <>
                    <div>{name}</div>
                    <div>{age}</div>
                    <div>{mono}</div>
                    </>
                   }
                </div>
            </div>
        </>
    )
}

export default MapTaskTwo