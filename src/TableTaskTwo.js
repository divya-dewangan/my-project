import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

function TableTaskTwo() {
    const [value] = useState([
        {
            id: 1,
            name: 'divya',
            age: 23,
            address: 'bhothali',
        },
        {
            id: 2,
            name: 'durga',
            age: 22,
            address: 'kurud',
        },
        {
            id: 3,
            name: 'vani',
            age: 24,
            address: 'kurud',
        },
        {
            id: 4,
            name: 'sonam',
            age: 21,
            address: 'gadhadihi',
        }
    ])
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th> Name</th>
                        <th>Age</th>
                        <th>Mo.No</th>
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
                            <td><button className='btn btn-danger btn-sm mx-2'>Delete</button><button className='btn btn-success btn-sm'>Edit</button></td>
                        </tr>)
                    })}
                
                
                
               
            </tbody>
            </Table>
        </>
    )
}

export default TableTaskTwo