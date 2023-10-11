import React, { useEffect, useState } from 'react'

function CardDisplayMapTask() {
    const [title, setTilte] = useState("")
    const [discription, setDiscription] = useState("")
    const [buttonName, setButtonName] = useState("")
    const [image, setImage] = useState("")
    const [value, setvalue] = useState([])

    const titleHandker = (e) => {
        setTilte(e.target.value)
        console.log("titile is", e)
    }

    const discriptionHandker = (e) => {
        setDiscription(e.target.value)
        console.log("discription  is", e)
    }

    const buttonHandker = (e) => {
        setButtonName(e.target.value)
        console.log("buton name is", e)
    }

    const urlHandker = (e) => {
        setImage(e.target.value)
        console.log("tish is img", e)
    }

    const submiHandler = () => {
        const fullCard = { cardTitle: title, cardDiscription: discription, cardbutton: buttonName, cardImage: image }
        console.log("aaaa", fullCard)
        setvalue(prev => ([...prev, fullCard]))

    }

    const cardHandler = (path) => {
        
        var imageUrl = path
        window.open(imageUrl, '_blank');

        console.log("this is card",path)
    }

    useEffect(() => {
        setTilte("")
        setDiscription("")
        setButtonName("")
        setImage("")
    }, [value])

    return (
        <>
            <div className='container-fluid'>
                <div className='row '>
                    <div className='col-md-3 text-center my-5'>
                        <h3 className='my-2'>Title</h3>
                        <input className='from-control w-75 p-2 my-2' type='text' name='input' placeholder='Enter your name' value={title} onChange={titleHandker} />
                    </div>
                    <div className='col-md-3 text-center my-5'>
                        <h3 className='my-2'>Discription</h3>
                        <input className='from-control w-75 p-2 my-2' type='text' name='input' placeholder='Enter color code' value={discription} onChange={discriptionHandker} />
                    </div>
                    <div className='col-md-3 text-center my-5'>
                        <h3 className='my-2'>Button Name</h3>
                        <input className='from-control w-75 p-2 my-2' type='text' name='input' placeholder='Enter color code' value={buttonName} onChange={buttonHandker} />
                    </div>
                    <div className='col-md-3 text-center my-5'>
                        <h3 className='my-2'>Image url</h3>
                        <input className='from-control w-75 p-2 my-2' type='text' name='input' placeholder='Enter color code' value={image} onChange={urlHandker} />
                    </div>
                </div>
                <div className='col-md text-center'>
                    <button className='btn btn-info w-50 my-5' onClick={submiHandler}>Submit</button>
                </div>


                <div className='row my-3'>
                    {value.map((item, index) => {
                        return (
                            <div className='col-md-4 text-center' key={index}>
                                <div className="card" style={{ width: "25rem", }}>
                                    <img src={item.cardImage} className="card-img-top card-img" style={{ height: "10rem" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.cardTitle}</h5>
                                        <p className="card-text">{item.cardDiscription}</p>
                                        <button className='btn btn-info' onClick={() => cardHandler(item.cardImage)} >{item.cardbutton}</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CardDisplayMapTask