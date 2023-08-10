import React, { useState } from 'react'

function InputArrayMathod() {
    const [array, setArray] = useState("")
    const [valueget,setValueGet] = useState('')

    const ChangeHandeler = (e) => {
        setArray(e.target.value)
    }
    

    const submitHandler = () => {
        console.log('jfeld', array)
        var name = array
        var splitName = name.split("")
        console.log(splitName)
        var reverseName = splitName.reverse()
        console.log(reverseName)
        var joinName = splitName.join('')
        console.log( 'hy...',joinName)
        setValueGet(joinName)
    }


    return (
        <>
            <div className='row  my-3'>
                <div className='col-md-6 d-flex justify-content-center'>
                    <input type='text' name='input' className='form-control w-50 ' onChange={ChangeHandeler} />
                </div>

                <div className='col-md-6'>
                    <button className='btn btn-info' onClick={submitHandler}>Submit</button>
                </div>
            </div>

            <div className='row my-3'>
                <div className='col-md-6 text-center'>
                    <p className='fs-3'>Reverse name is  <span className='text-danger'>{valueget}</span></p>
                </div>


            </div>
        </>
    )
}

export default InputArrayMathod