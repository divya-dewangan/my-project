import React, { useEffect, useState } from 'react'
import PropsInputClid from './ChildComponent/PropsInputClid'

function PropsInputTask(props) {
    const[getInput,setGetInput] = useState("")
    const[sendValue,setSendValue] = useState("")
    const[item,setItem] = useState("")

    const changeHendler = (e) => {
        setGetInput(e.target.value)
    }

    const submitHandler = () => {
        console.log('heyyyyy',getInput)
        setSendValue(getInput)
    }
    useEffect(() => {
        setGetInput("")
    }, [sendValue])

    const sentDataFromChild = (value) => {
        console.log("get from child ::", value)
        setItem(value)
        setGetInput("")

    }
    return (
        <>
        <div className='text-warning fs-1'>{item}</div>
        <div className='text-danger fs-1'>{props.text}</div>
            <div className='my-3 d-flex justify-content-center' >
                <input className='form-control w-25 mx-3' type='text' value={getInput} name='input' onChange={changeHendler}/>
                <button className='btn btn-info' onClick={submitHandler}>Submit</button>
            </div>
        <PropsInputClid text={sendValue} sentDataFromChild={sentDataFromChild} />

        </>
    )
}

export default PropsInputTask