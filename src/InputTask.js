import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

function InputTask() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [address, setAddress] = useState("")
    const [value, setValue] = useState([])

    const nameChange = (e) => {
        setName(e.target.value)
    }
    const ageChange = (e) => {
        setAge(e.target.value)
    }
    const addressChange = (e) => {
        setAddress(e.target.value)
    }
    
    const submitHandlar = () => {
        const item = {
            id: Math.random().toFixed(3),
            name: name,
            age: age,
            address: address,
        }       
        setValue(prev => ([...prev, item]))
        setName("");
        setAge("");
        setAddress("")
    }
    
    const deleteHandlar = (id) => {
        console.log('delete ho gaya bhaiiii....', id);
        const deleteItem = value.filter(item => item.id !== id);
        console.log("Delete item is::", deleteItem)
        setValue(deleteItem)
       }
    return (
        <>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1>Form</h1>
                    <div className='text center'>
                        <input className='form-control mb-3 w-25' type='input' placeholder='Enter your name' value={name} onChange={nameChange}></input>
                        <input className='form-control mb-3 w-25' type='input' placeholder='Enter your Age' value={age} onChange={ageChange}></input>
                        <input className='form-control mb-3 w-25' type='input' placeholder='Enter your Address' value={address} onChange={addressChange}></input>
                        <button className='btn btn-info ' onClick={() => submitHandlar()}>Submit</button>
                    </div>
                </div>
                <div className='col-12'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th> Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {value.map((item, index) => {
                                return (<tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td><button className='btn btn-danger btn-sm mx-2' onClick={() => deleteHandlar(item.id)}>Delete</button><button className='btn btn-success btn-sm'>Edit</button></td>
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
export default InputTask