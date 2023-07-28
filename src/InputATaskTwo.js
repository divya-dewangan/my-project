import React, { useState } from 'react'

function InputATaskTwo() {
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [list, setList] = useState([])


    const changeName = (e) => {
        setName(e.target.value)
    }
    const changeCity = (e) => {
        setCity(e.target.value)
    }

    const click = () => {
        const item = {
            id: Math.random().toFixed(4),
            name: name,
            city: city,
        }
        setList(prev => ([...prev, item]))
        setName("");
        setCity("");
    }

    const deleteChangeHandlar = (id) => {
        console.log('deleted mybe',id);
        const newItem = list.filter(item => item.id !== id);
        console.log('deleted......',newItem);
        setList(newItem)

    }

    return (
        <>
            <table className='table w-50 text-center'>
                <tbody>
                    <tr>
                        <th>S.no.</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                    {list.map((item, index) => {
                        return (<tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                        <button className='btn btn-danger' onClick={() => deleteChangeHandlar(item.id)}>Delete</button>

                        </tr>

                        )
                    }
                    )}
                </tbody>

            </table>
            <div className='row'>
                <div className='col-6 text-center'>
                    <p>Name</p>
                    <input type='input' onChange={changeName}></input>
                </div>
                <div className='col-6 text-center'>
                    <lable>City</lable>
                    <input type='input' onChange={changeCity}></input>
                </div>
            </div>
            <div className='row text-center'>
                <div className='m-4'>

                    <button className='btn btn-info' onClick={click}>Click</button>
                </div>
            </div >
        </>
    )
}

export default InputATaskTwo