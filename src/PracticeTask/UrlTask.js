import React, { useState } from 'react'

function UrlTask() {

    const [url, setUrl] = useState("")
    const [value, setValue] = useState([])

    const urlChange = (e) => {
        setUrl(e.target.value)
    }

    const submitHandler = () => {
        setValue(prev => ([...prev, url]))
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md d-flex justify-content-center'>
                        <input type='text' name='input' className='form-control w-75 m-5' value={url} onChange={urlChange} />
                        <button className='btn btn-info m-5 d-flex justify-content-center' onClick={submitHandler}>Submit</button>
                    </div>
                </div>
                <div className='row'>
                    {value.map((item,index) => {
                    return(<div className='col-md' key={index}>
                        <div >
                        <img style={{ width: '20rem', height: '200px' }} alt='url' src={item} className='my-5'/>
                        </div>
                    </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default UrlTask