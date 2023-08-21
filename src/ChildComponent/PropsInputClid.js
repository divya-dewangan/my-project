import React, { useEffect, useState } from 'react'

function PropsInputClid(props) {
    const[getValue,setGetValue] = useState("")
    const[senditem,setSendItem] = useState("")

    const hendlerChange = (e) => {
        setGetValue(e.target.value)
    }

    const handlersubmit = () => {
        console.log('heyyyyy',getValue)
        setSendItem(getValue)
        props.sentDataFromChild(getValue)
    }
    useEffect(() => {
        setGetValue("")
    }, [senditem])

    return (
        <>
        <div className='text-danger fs-1'>{props.text}</div>
        <div className='my-3 d-flex justify-content-center' >
                <input className='form-control w-25 mx-3' type='text' value={getValue} onChange={hendlerChange} name='input'/>
                <button className='btn btn-info' onClick={handlersubmit}>Submit</button>
            </div>
        </>
    )
}


export default PropsInputClid