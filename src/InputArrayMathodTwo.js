import React, { useEffect, useState } from 'react'

function InputArrayMathodTwo() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [fullName, setFullName] = useState("")

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value)
    }

    const submitHandler = () => {
        var first = firstName
        var last = lastName
        var firstNameCaps = first.charAt(0).toUpperCase() + first.slice(1).toLocaleLowerCase()
        var lastNameCaps = last.charAt(0).toUpperCase() + last.slice(1).toLocaleLowerCase()
        var result = firstNameCaps + " " + lastNameCaps
        console.log(result)
        setFullName(result)

    }
    useEffect(() => {
        setFirstName("")
        setLastName("")
    }, [fullName])


    return (
        <>
            <div className='row  my-3'>
                <div className='col-md-4 d-flex justify-content-center'>
                    <input type='text' name='input' className='form-control w-50 ' value={firstName} onChange={firstNameHandler} />
                </div>
                <div className='col-md-4 d-flex justify-content-center'>
                    <input type='text' name='input' className='form-control w-50 ' value={lastName} onChange={lastNameHandler} />
                </div>

                <div className='col-md-4'>
                    <button className='btn btn-info' onClick={submitHandler}>Submit</button>
                </div>
            </div>

            <div className='row my-3'>
                <div className='col-md-6 text-center'>
                    <p className='fs-3'>My Full Name is  <span className='text-danger'>{fullName}</span></p>
                </div>


            </div>

        </>
    )

}

export default InputArrayMathodTwo
