import React, { useState } from 'react'

function MapTaskTwo() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [flag, setFlag] = useState(false)


    const nameChange = (e) => {
        setName(e.target.value)
    }
    const ageChange = (e) => {
        setAge(e.target.value)
    }
    const addressChange = (e) => {
        setAddress(e.target.value)
    }
    const submitHandlar = () => {
        // 
        console.log('Submit call')
        setFlag(prev => !prev);
        // setFlag(!flag);
        // setName("")
        // setAge("")
        // setAddress("")


    }
    return (
        <>
            <div className='row'>
                <div className='col-6 text-center'>
                    <h1>Form</h1>
                    <div className='text center'>
                        <input className='form-control mb-3 w-50' type='input' placeholder='Enter your name ' onChange={nameChange}></input>
                        <input className='form-control mb-3 w-50' type='input' placeholder='Enter your Age' onChange={ageChange}></input>
                        <input className='form-control mb-3 w-50' type='input' placeholder='Enter your Address' onChange={addressChange}></input>
                        <button className='btn btn-info ' onClick={() =>submitHandlar()}>Submit</button>
                    </div>
                </div>
                <div className='col-6 text-center'>
                    <h1>Output</h1>
                    {flag &&
                        <>
                            <div>{name}</div>
                            <div>{age}</div>
                            <div>{address}</div>
                        </>}
                </div>
            </div>
        </>
    )
}

export default MapTaskTwo
