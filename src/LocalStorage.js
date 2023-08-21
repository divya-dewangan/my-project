import React, { useEffect, useState } from 'react'

function LocalStorage() {
    const [name, setName] = useState("")
    const [value, setValue] = useState([])

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const submitHandler = () => {
        console.log('is name?', name)
        const item = {
            name: name,
            
        }
        console.log('its item',item)
        setValue(prev => ([...prev,item]))
        setName("")
    }

    useEffect(() => {
        if (value.length) {
            localStorage.setItem('data', JSON.stringify(value))//stringify for set value as string becouse local storage only set string forms.
            console.log('hii', value)
        }
    }, [value])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'))//parse convert array and string to a normal froms like that-"[data]"/data
        setValue(data)

    }, [])
    return (
        <>
            <input className='from-control w-25 m-3' type='text' name='input' value={name} placeholder='Enter your name' onChange={nameHandler} />
            <button className='btn btn-info m-3' type='button' onClick={submitHandler}>Submit</button>
            <table>
                <thead>
                    <tr>
                        <th> Name</th>
                    </tr>
                </thead>
                {value.map((item,index) => {
                    return(<tbody key={index}>

                    <tr>
                        <td>{item.name}</td>
                    </tr>
                    </tbody>
                    )
                })}
            </table>
        </>
    )
}

export default LocalStorage