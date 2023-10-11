import React, { useState } from 'react'

function InputMapTask() {

    const [number, setNumber] = useState("")
    const [value, setValue] = useState([])

    const numberChange = (e) => {
        setNumber(e.target.value)
    }

    // for generate rendom number-
    const generateRandom6DigitNumber = () => {
        const min = 100000; // Smallest 6-digit number (100000)
        const max = 999999; // Largest 6-digit number (999999)
      
        // Generate a random number between min and max (inclusive)
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    //   # is using for ceacting a hexa code color
        return "#" + randomNumber;
      };
      

    const submitHandler = () => {
        console.log("hyyy")
        const num = Array(Number(number)).fill().map(() => generateRandom6DigitNumber());
        // setValue(prev =>([...prev, 1,2,5]))
        setValue(num)
    }


    return (
        <>
            <div className='container'>
                <div className='row m-5'>
                    {/* <div>{number}</div> */}
                    <div className='col-md-6 d-flex justify-content-end'>
                        <input className='form-control w-25' name='input' type='number' value={number} onChange={numberChange} />
                    </div>
                    <div className='col-md-6 d-flex justify-content-start'>
                        <button className='btn btn-info ' onClick={submitHandler}>Submit</button>
                    </div>
                </div>

                <div className='row m-5'>
                    {value.map((item, index) => {
                        return (<div className='col-md-1 m-4' key={index}>
                            <div className='border border-dark' style={{ width: '6rem', height: '60px',background: item }}>
                                {item} 
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </>

    )
}

export default InputMapTask