import React, { useState } from 'react'

function TwoInputInOne() {
    const [firstName, setFirstName] = useState("")
    const [lasttName, setLasttName] = useState("")

    const SubmitHandler = (string,name) => {
        console.log(string,name)
    }
    return (
        <>
            <div className='container'>
                <div className='row my-4'>
                    <div className='col-md-6 text-center'>
                        <input className='from-control w-50' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className='col-md-6'>
                        <input className='from-control w-50' value={lasttName} onChange={(e) => setLasttName(e.target.value)} />
                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-md text-center'>
                        <button className='btn btn-info' onClick={() => SubmitHandler('helo','divya')}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TwoInputInOne