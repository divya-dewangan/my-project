import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import * as yup from 'yup'

function GroceryValidation() {
    const [list, setList] = useState([])
    const [deleteflag, setDeleteFlag] = useState(false)
    const [deleteid, setDeleteId] = useState("")
    const [updateid, setUpdateid] = useState("")
    const [updatebutton, setUpdatebutton] = useState(false)

    const deleteHandler = (id) => {
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

    const editHandler = (value) => {
        // setName(value.name);
        // setPrice(value.price);
        // setQuantity(value.quantity);
        // setTax(value.tax);
        setUpdateid(value.id)
        setUpdatebutton(true)
    }

    const updateHandler = (flag) => {
        const data = list.map(item => {
            if (item.id === updateid) {
                    item.name = flag.name
                    item.price = flag.price
                    item.quantity = flag.quantity
                    item.tax = flag.tax
            }
            return item
        })
        setList(data)
        // setName("");
        // setPrice("");
        // setQuantity("");
        // setTax("")
        setUpdatebutton(false)
        setUpdateid("")
    }

    const initialValues = {
        name: "",
        price: "",
        quantity: "",
        gst: ""
    }

    const validationSchema = yup.object({
        name: yup.string().required(),
        price: yup.string().required(),
        quantity: yup.string().required(),
        gst: yup.string().required()
    })

    const onSubmit = (flag) => {
        console.log("validation::", flag)
        console.log("update::",updatebutton)
        if (updatebutton) {
            console.log("in side if condition")
            updateHandler(flag)
        } else {
            console.log("in side the else condition")
            const data = {
                name: flag.name,
                price: flag.price,
                quantity: flag.quantity,
                tax: flag.tax,
                id: Math.random()

            }
            setList(prev => ([...prev, data]))
        }

    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <>

            <div className='container'>
                <div className='row my-5 '>
                    <h1><u>GROCERY STORE</u></h1>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-md-2'>
                            <label className='fw-bold'>Name</label>
                            <input className='form-control w-75 mt-3' type='taxt' name='name' value={formik.valuesname} onChange={formik.handleChange} />
                            {(formik.errors.name && formik.touched.name && <div className='text-danger'>{formik.errors.name}</div>)}

                        </div>

                        <div className='col-md-2'>
                            <label className='fw-bold'>Price</label>
                            <input className='form-control w-75 mt-3' type='taxt' name='price' value={formik.values.price} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {(formik.errors.price && formik.touched.price && <div className='text-danger'>{formik.errors.price}</div>)}

                        </div>

                        <div className='col-md-2'>
                            <label className='fw-bold'>quantity</label>
                            <input className='form-control w-75 mt-3' type='taxt' name='quantity' value={formik.values.quantity} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {(formik.errors.quantity && formik.touched.quantity && <div className='text-danger'>{formik.errors.quantity}</div>)}
                        </div>

                        <div className='col-md-2'>
                            <label className='fw-bold'>GST</label>
                            <input className='form-control w-75 mt-3' type='taxt' name='gst' value={formik.values.gst} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {(formik.errors.gst && formik.touched.gst && <div className='text-danger'>{formik.errors.gst}</div>)}

                        </div>
                        <div className='col-md-4'>
                            {updatebutton
                                ? <button className='btn btn-warning w-50 p-3 mt-4' type='submit'>Update</button>
                                : <button className='btn btn-info w-50 p-3 mt-4' type='submit'>Submit</button>
                            }
                        </div>

                    </div>
                </form>


                {list.map((item, index) => {
                    return (<Card key={index} className='my-5' style={{ width: '35rem', height: '50px', background: item }}>
                        <Card.Body className='p-0'>
                            <div className='d-flex justify-content-between m-2'>
                                <div className=''>{item.name}</div>
                                <div className=''>{item.price}</div>
                                <div className=''>{item.quantity}</div>
                                <div className=''>{item.tax}</div>
                                <button className='btn btn-danger' onClick={() => deleteHandler(item.id)} >Delete</button>
                                <button className='btn btn-warning' onClick={() => editHandler(item)}>Edit</button>
                            </div>
                        </Card.Body>
                    </Card>)
                })}

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
            </div >
        </>
    )
}


export default GroceryValidation