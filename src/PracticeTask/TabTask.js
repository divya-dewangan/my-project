import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { FiDelete } from "react-icons/fi"

function TabTask() {

    const [title, setTitle] = useState("")
    const [activeTab, setActiveTab] = useState("pending")
    const [value, setValue] = useState([])

    const titleHandler = (e) =>
        setTitle(e.target.value)


    const submitHandler = () => {
        if(!title){
            return alert('Please enter the title')
        }
        const item = {
            id: Math.random().toFixed(2),
            title: title,
            status: 'pending',
        }

        console.log('kjbdfkjghkdfj', title)
        setValue(prev => ([...prev, item]))
        setTitle("");
    }
    const handleSelect = (eventKey) => {
        console.log(`selected ${eventKey}`);
        setActiveTab(eventKey)
    }

    const leftArrowHandler = (privus) => {
        const aa = value.map(item => {
            if (item.id == privus.id && item.status == 'ongoing') {
                item.status = 'pending'
                return item
            }
            if (item.id == privus.id && item.status == 'complite') {
                item.status = 'ongoing'
                return item
            }
            return item
            
        })
        setValue(aa)
        console.log("privus", privus)
    }

    const rightArrowHandler = (next) => {
        const data = value.map(item => {
            if (item.id == next.id && item.status == 'pending') {
                item.status = 'ongoing'
                return item
            }

            if (item.id == next.id && item.status == 'ongoing') {
                item.status = 'complite'
                return item
            }
            return item
        })
        setValue(data)
        console.log("next", next)

    }
    const handleDelete = (id) => {
        const deleteItem = value.filter(item => item.id !== id)
        setValue(deleteItem)
        console.log("delete",)

    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 my-4' >
                        <input className='form-control w-50' value={title} type='text' name='input' onChange={titleHandler} placeholder='Enter title name' />
                    </div>
                    <div className='col-md-6 my-4' >
                        <button className='btn btn-info' onClick={submitHandler}>Submit</button>

                    </div>
                </div>

                <div className='row'>
                    <div className='col-md'>
                        <Nav variant="pills" defaultActiveKey={activeTab} onSelect={handleSelect}>
                            <Nav.Item>
                                <Nav.Link eventKey="pending">Pending</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="ongoing"> Ongoing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="complite"> Complited</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>

                {value.map((item, index) => {
                    if (item.status == 'pending' && activeTab == 'pending') {
                        return (<div className=" flex-row my-3 w-25 border d-flex justify-content-between rounded-3" key={index} style={{ height: "50px" }}>
                            <div className=' d-flex justify-content-between '>
                                <div className="p-2 text-center  ms-3 text-truncate">{item.title}</div>
                            </div>
                            <div className=' d-flex justify-content-between me-3'>
                                {/* <div className="p-2" type="button" onClick={() => leftArrowHandler(item)}>
                                <HiArrowSmLeft  />
                            </div> */}
                                <div className="p-2" type="button" onClick={() => rightArrowHandler(item)}>
                                    <HiArrowSmRight />
                                </div>
                                <div className="p-2" type="button" onClick={() => handleDelete(item.id)}>
                                    <FiDelete />
                                </div>
                            </div>
                        </div>
                        )
                    }
                    if (item.status == 'ongoing' && activeTab == 'ongoing') {
                        return (<div className=" flex-row my-3 w-25 border d-flex justify-content-between rounded-3" key={index} style={{ height: "50px" }}>
                            <div className=' d-flex justify-content-between '>
                                <div className="p-2 text-center  ms-3 text-truncate">{item.title}</div>
                            </div>
                            <div className=' d-flex justify-content-between me-3'>
                                <div className="p-2" type="button" onClick={() => leftArrowHandler(item)}>
                                    <HiArrowSmLeft />
                                </div>
                                <div className="p-2" type="button" onClick={() => rightArrowHandler(item)}>
                                    <HiArrowSmRight />
                                </div>
                                <div className="p-2" type="button" onClick={() => handleDelete(item.id)}>
                                    <FiDelete />
                                </div>
                            </div>
                        </div>
                        )
                    }
                    if (item.status == 'complite' && activeTab == 'complite') {
                        return (<div className=" flex-row my-3 w-25 border d-flex justify-content-between rounded-3" key={index} style={{ height: "50px" }}>
                            <div className=' d-flex justify-content-between '>
                                <div className="p-2 text-center  ms-3 text-truncate">{item.title}</div>
                            </div>
                            <div className=' d-flex justify-content-between me-3'>
                                <div className="p-2" type="button" onClick={() => leftArrowHandler(item)}>
                                    <HiArrowSmLeft />
                                </div>
                                {/* <div className="p-2" type="button" onClick={()=> rightArrowHandler(item)}>
                                <HiArrowSmRight />
                            </div> */}
                                <div className="p-2" type="button" onClick={() => handleDelete(item.id)}>
                                    <FiDelete />
                                </div>
                            </div>
                        </div>
                        )
                    }



                })}

            </div>

        </>
    )
}

export default TabTask