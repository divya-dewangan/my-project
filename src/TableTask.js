import React from 'react'
import Table from 'react-bootstrap/Table';
function TableTask() {
    return (

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
                <tr>
                    <td>1</td>
                    <td>fmsd</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className='btn btn-danger btn-sm mx-2'>Delete</button><button className='btn btn-success btn-sm'>Edit</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td> <td><button className='btn btn-danger btn-sm mx-2'>Delete</button><button className='btn btn-success btn-sm'>Edit</button></td>

                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td><button className='btn btn-danger btn-sm mx-2'>Delete</button><button className='btn btn-success btn-sm'>Edit</button></td>
                </tr>
            </tbody>
        </Table>

    )
}

export default TableTask