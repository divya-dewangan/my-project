import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function InputTaskThree() {
    const [header, setHeader] = useState("")
    const [title, setTitle] = useState("")
    const [subtitle, setSubTitle] = useState("")
    const [button, setButton] = useState("")
    const [cardList, setCardList] = useState([])

    const headerHandlar = (e) => {
        setHeader(e.target.value)
    }
    const titleHandlar = (e) => {
        setTitle(e.target.value)
    }
    const subtitleHandlar = (e) => {
        setSubTitle(e.target.value)
    }
    const buttonHandlar = (e) => {
        setButton(e.target.value)
    }

    const clickHendlar = () => {
        if (header === "") {
            return alert("please enter header")
        }
        if (title === "") {
            return alert("please enter title")
        }
        if (subtitle === "") {
            return alert("please enter subtitle")
        }
        if (button === "") {
            return alert("please enter button name")
        }

        const item = {
            header: header,
            title: title,
            subtitle: subtitle,
            button: button,
        }
        setCardList(prev => ([...prev, item]))

        setHeader("");
        setTitle("");
        setSubTitle("");
        setButton("");
    }
    const deleteButtonHendler = (button) => {
        console.log('cards are deleted',button);
        const newItem = cardList.filter(item => item.button !== button);
        console.log('deleted.....',newItem);
        setCardList(newItem);
    }

    return (
        <div className='container'>
            <Card style={{ width: '18rem' }} className='text-center my-3'>
                <Card.Header>Card Generater</Card.Header>
                <Card.Body>
                    <div>
                        <input type='input' className=' form-control mb-2' placeholder='Enter Header' value={header} onChange={headerHandlar} />
                        <input type='input' className='form-control mb-2' placeholder='Enter Title' value={title} onChange={titleHandlar} />
                        <input type='input' className='form-control mb-2' placeholder='Enter Subtitle' value={subtitle} onChange={subtitleHandlar} />
                        <input type='input' className='form-control mb-2' placeholder='Enter Button name' value={button} onChange={buttonHandlar} />
                        <button className='btn btn-info' onClick={clickHendlar}>Submit</button>
                    </div>
                </Card.Body>
            </Card>

            <div className='row '>
                {cardList.map((item, index) => {
                    return (<div className='col-md-3 mx-2' key={index}>
                        <Card  className='m-2 w-100' >
                            <Card.Header>{item.header}</Card.Header>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.subtitle}
                                </Card.Text>
                                <Button variant="primary" onClick={() => deleteButtonHendler(item.button)}>{item.button}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InputTaskThree