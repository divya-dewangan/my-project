import React, { useRef, useState } from 'react'

function RefTaskTwo() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();


    const nameHandler = (e) => {
        setName(e.target.value)
        nameRef.current.style.borderColor = "red"
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        emailRef.current.style.borderColor = "orange"

    }
    const moHandler = (e) => {
        setMobile(e.target.value)
        mobileRef.current.style.borderColor = "pink"

    }
    const submitHandler = () => {
        const data = {
            name,
            email,
            mobile
        }
        console.log('final value', data)
    }

    return (
        <>
            <div className='text-center'>
                <input type='text' name="name" ref={nameRef} value={name} className='form-control mb-3 w-50 ' placeholder='Enter your full name' onChange={nameHandler} />
                <input type='text' name="email" ref={emailRef} value={email} className='form-control mb-3 w-50' placeholder='Enter your emali' onChange={emailHandler} />
                <input type='text' name="mobile" ref={mobileRef} value={mobile} className='form-control mb-3 w-50' placeholder='Enter your mo.no.' onChange={moHandler} />
                <div className='w-50 text-center'>
                    <button className='btn btn-info' onClick={submitHandler}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default RefTaskTwo
