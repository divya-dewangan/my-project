import React, { useState } from 'react'

function ColorDisplayMap() {

    const [colorName, setColorName] = useState("")
    const [codeName, serCodeName] = useState("")
    const [cardList, setCardList] = useState([])

    const colorHandler = (e) => {
        setColorName(e.target.value)
        console.log('yeee', e.target.value)
    }

    const codeHandler = (e) => {
        serCodeName(e.target.value)
        console.log('wreeeepppp', e.target.value)
    }

    const sumbitHandler = () => {
        const colorCode = { color: colorName, code: codeName }
        console.log("julmi pti hamre", colorCode)
        setCardList(prev => ([...prev, colorCode]))

    }
    return (
        <>
            <div className='row ml-3'>
                <div className='col-md-6 text-center my-5'>
                    <h3 className='my-2'>Name</h3>
                    <input className='from-control w-50 p-2 my-2' type='text' name='input' placeholder='Enter your name' value={colorName} onChange={colorHandler} />
                </div>
                <div className='col-md-6 text-center my-5'>
                    <h3 className='my-2'>Code</h3>
                    <input className='from-control w-50 p-2 my-2' type='text' name='input' placeholder='Enter color code' value={codeName} onChange={codeHandler} />
                </div>
            </div>
            <div className='col-md text-center'>
                <button className='btn btn-info w-50 my-5' onClick={sumbitHandler}>Submit</button>
            </div>

            <div className='row ml-4'>
                {cardList.map((item, index) => {
                    return (<div className='col-md-3' key={index}>
                        <div className="card mb-3" style={{ width: '10rem', height: '150px', backgroundColor: `${item.code}` }}>
                            <div className="card-body">
                                <h3 className="card-title">{item.color}</h3>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default ColorDisplayMap