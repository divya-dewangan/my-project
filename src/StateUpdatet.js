import React, { useState } from 'react'

function StateUpdatet() {
    const [array, setArray] = useState([])
    const [object, setObject] = useState({})
    const [string, setString] = useState("")
    const [buliyan, setBuliyan] = useState(false)


    const haldleArray = () => {
        const newArray = [34, 56, 87, 12, 45]
        setArray(newArray)
    }

    const haldleObject = () => {
        const newObject = {fruit:'apple,',colour:'pink'}
        setObject(newObject)
    }

    const haldleString = () => {
        const newString = 'my name is Chootu'
        setString(newString)
    }

    const haldleBuliyan = () => {
        const newBuliyan = true
        setBuliyan(newBuliyan)
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-3'>
                    <div>{JSON.stringify(array)}</div>
                    <button className='btn btn-info' onClick={haldleArray}>Array</button>
                </div>

                <div className='col-md-3'>
                    <div>{JSON.stringify(object)}</div>
                    <button className='btn btn-info' onClick={haldleObject}>Object</button>
                </div>

                <div className='col-md-3'>
                    <div>{string}</div>
                    <button className='btn btn-info' onClick={haldleString}>String</button>
                </div>

                <div className='col-md-3'>
                    <div>{JSON.stringify(buliyan)}</div>
                    <button className='btn btn-info' onClick={haldleBuliyan}>Buliyan</button>
                </div>

            </div>
        </>
    )
}

export default StateUpdatet