import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import DataTable from 'react-data-table-component';


function GroceryStore() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [tax, setTax] = useState("")
    const [list, setList] = useState([])
    const [deleteflag, setDeleteFlag] = useState(false)
    const [deleteid, setDeleteId] = useState("")
    const [updateid, setUpdateid] = useState("")
    const [updatebutton, setUpdatebutton] = useState(false)


    const nameChenger = (e) => {
        setName(e.target.value)
    }

    const priceChenger = (e) => {
        setPrice(e.target.value)
    }

    const quantityChenger = (e) => {
        setQuantity(e.target.value)
    }

    const taxChenger = (e) => {
        setTax(e.target.value)
    }

    const submitHandler = () => {
        const data = {
            name: name,
            price: price,
            quantity: quantity,
            tax: tax,
            id: Math.random()
        }

        setList(prev => ([...prev, data]))
        setName("");
        setPrice("");
        setQuantity("");
        setTax("");
    }
    const delethandler = (id) => {
        setDeleteId(id)
        setDeleteFlag(true)

    }

    const handleDelete = () => {
        setDeleteFlag(false)
        console.log('delete ho gaya bhaiiii....', deleteid);
        const deleteItem = list.filter(item => item.id !== deleteid);
        console.log("Delete item is::", deleteItem)
        setList(deleteItem)
        setDeleteFlag(false)
        setDeleteId("")
    }

    const handleClose = () => {
        setDeleteFlag(false)
    }

    const edithandler = (value) => {
        console.log("all value:::",value)
        setName(value.name);
        setPrice(value.price);
        setQuantity(value.quantity);
        setTax(value.tax);
        setUpdateid(value.id)
        setUpdatebutton(true)
    }

    const updateHandler = () => {
        const data = list.map(item => {
            if (item.id === updateid) {
                item.name = name
                item.price = price
                item.quantity = quantity
                item.tax = tax
            }
            return item
        })
        setList(data)
        setName("");
        setPrice("");
        setQuantity("");
        setTax("")
        setUpdatebutton(false)
        setUpdateid("")
    }
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', price: 20, quantity: 30, GST: 2 },
        { id: 2, name: 'Jane Smith', price: 20, quantity: 30, GST: 2 },
        // Add more data rows as needed
    ]);

    // const [editingId, setEditingId] = useState(null);

    const handleEdit = (id, field, value) => {
        const updatedData = data.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setData(updatedData);
    };

    const columns = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'PRICE',
            selector: 'price',
        },
        {
            name: 'QUANTITY',
            selector: 'quantity',
        },
        {
            name: 'GST',
            selector: 'tax',
        },
        {
            name: 'Action',
            selector: 'fhhg',
            sortable: true,
            cell: row => {

                return (
                    <>
                        <div onClick={() => delethandler(row.id)}><button className='btn btn-danger mx-2'>Delete</button></div>
                        <div onClick={() => edithandler(row)}><button className='btn btn-warning'>Edit</button></div>
                    </>)
            },
        },
        // Add more columns as needed
    ];

    return (
        <>
            <div className='container'>
                <div className='row my-5 '>
                    <h1><u>GROCERY STORE</u></h1>
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                        <label className='fw-bold'>Name</label>
                        <input className='form-control w-75 mt-3' type='taxt' name='input' value={name} onChange={nameChenger} />
                    </div>

                    <div className='col-md-2'>
                        <label className='fw-bold'>Price</label>
                        <input className='form-control w-75 mt-3' type='taxt' name='input' value={price} onChange={priceChenger} />
                    </div>

                    <div className='col-md-2'>
                        <label className='fw-bold'>quantity</label>
                        <input className='form-control w-75 mt-3' type='taxt' name='input' value={quantity} onChange={quantityChenger} />
                    </div>

                    <div className='col-md-2'>
                        <label className='fw-bold'>GST</label>
                        <input className='form-control w-75 mt-3' type='taxt' name='input' value={tax} onChange={taxChenger} />
                    </div>
                    <div className='col-md-4'>
                        {updatebutton
                            ? <button className='btn btn-warning w-50 p-3 mt-4' onClick={updateHandler}>update</button>
                            : <button className='btn btn-info w-50 p-3 mt-4' onClick={submitHandler}>Submit</button>
                        }
                    </div>
                </div>

                <DataTable title="User Data" columns={columns} data={list} />;

                {/* {list.map((item, index) => {
                    return (<Card key={index} className='my-5' style={{ width: '35rem', height: '50px', background: item }}>
                        <Card.Body className='p-0'>
                            <div className='d-flex justify-content-between m-2'>
                                <div className=''>{item.name}</div>
                                <div className=''>{item.price}</div>
                                <div className=''>{item.quantity}</div>
                                <div className=''>{item.tax}</div>
                                 <button className='btn btn-danger' onClick={() => deleteHandler (item.id)} >Delete</button>
                                <button className='btn btn-warning' onClick={() => editHandler(item)}>Edit</button>
                                </div>
                        </Card.Body>
                    </Card>)
                })} */}

                <Modal show={deleteflag} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm that</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to delete this?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            cancle
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default GroceryStore