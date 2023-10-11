import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

function TodoTask() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [listItem, setListItem] = useState([])

    const [deleteflag, setDeleteFlag] = useState(false)

    const [deleteid, setDeleteId] = useState("")

    const [updateIdDeleteId, setUpdateIdDeleteId] = useState("")
    const [updateFlag, setUpdateFlag] = useState(false)

    const handleDelete = () => {
        console.log('delete ho gaya bhaiiii....', deleteid);
        const deleteItem = listItem.filter(item => item.id !== deleteid);
        console.log("Delete item is::", deleteItem)
        setListItem(deleteItem)
        setDeleteFlag(false)
        setDeleteId("")
    }

    const handleClose = () => {
        setDeleteFlag(false)
    }

    // const handalShow = () => {
    //     setDeleteFlag(true)
    // }


    const nameChangeHandler = (e) => {
        setName(e.target.deleteid)
    }

    const lastNameChangeHandler = (e) => {
        setLastName(e.target.deleteid)
    }

    const addHandler = () => {
        const data = {
            name: name,
            lastName: lastName,
            id: Math.random()
        }

        setListItem(prev => ([...prev, data]))
        setName("");
        setLastName("")
    }

    const deleteHandlar = (id) => {
        setDeleteFlag(true)
        setDeleteId(id)
    }

    const editHandler = (data) => {
        // setDeleteId(data)
        setName(data.name)
        setLastName(data.lastName)
        console.log("hii", data)
        setUpdateIdDeleteId(data.id)
        setUpdateFlag(true)

    }

    const updateHandler = () => {     
        const aa =  listItem.map(item => {
            if(item.id == updateIdDeleteId){
                item.name = name
                item.lastName= lastName
            }
            return item
        })
        setListItem(aa)
        setName("");
        setLastName("")
        setUpdateFlag(false)
        setUpdateIdDeleteId("")    
    }
    return (
        <>
            <div className='container'>
                <Card className='text-center d-flex justify-content-between d-block m-4' style={{ width: '600px' }}>
                    <Card.Body>
                        <h1 className='text-center mb-5'>Todo App</h1>
                        <div className='d-flex justify-content-between mb-4'>
                            <input type='input' placeholder='Type your name' className=' form-control m-2' value={name} onChange={nameChangeHandler} />
                            <input type='input' placeholder='Type your Last name' className=' form-control m-2' value={lastName} onChange={lastNameChangeHandler} />
                            {updateFlag
                                ? <button className='btn btn-warning btn-sm mx-2 w-50' onClick={updateHandler}>Update</button>
                                : <button className='btn btn-info btn-sm mx-2 w-50' onClick={addHandler}>Submit</button>
                            }
                        </div>

                        {listItem.map((item, index) => {
                            return (<Card key={index} className='mb-2'>
                                <Card.Body className='p-0'>
                                    <div className='d-flex justify-content-between m-2'>
                                        <div className='h3 text-info'>{item.id}</div>
                                        <div className='h3 text-info'>{item.name}</div>
                                        <div className='h3 text-info'>{item.lastName}</div>
                                        <button className='btn btn-danger' onClick={() => deleteHandlar(item.id)}>Delete</button>
                                        <button className='btn btn-warning ' onClick={() => editHandler(item)}>Edit</button>
                                    </div>
                                </Card.Body>
                            </Card>)
                        })}
                    </Card.Body>
                </Card>
                
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

export default TodoTask