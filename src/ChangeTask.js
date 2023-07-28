import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

function ChangeTask() {
    const [value, setValue] = useState(" ")
    const [list, setList] = useState([])


    const clickHandlar = () => {
        setList(prev => ([...prev, value]))
        setValue("")
    }

    const changeHandlar = (event) => {
        setValue(event.target.value)
    }

    return (
        <>

            <div className='d-flex justify-content-center my-3'>
                <Card className='text-center d-block' style={{ width: '600px' }}>
                    <Card.Body>
                        <h1 className='text-center mb-5'>Todo App</h1>
                        <div className='d-flex justify-content-between mb-4'>
                            <input type='input' placeholder='Type your name' className=' form-control' value={value} onChange={changeHandlar}></input>
                            <button className='btn btn-info btn-sm mx-2 w-50' onClick={clickHandlar}>Add</button>
                        </div>
                        {list.map((item, index) => {
                            return (<Card key={index} className='mb-2'>
                                <Card.Body className='p-0'>
                                    <div className='d-flex justify-content-between m-2'>
                                        <div className='h3 text-info'>{item}</div>
                                        <button className='btn btn-danger'>X</button>
                                    </div>
                                </Card.Body>
                            </Card>)
                        })}

                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default ChangeTask

