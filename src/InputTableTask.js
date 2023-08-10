import React, { useEffect, useState } from 'react'

function InputTableTask() {
    const [name, setName] = useState("")
    const [className, setClassName] = useState("")
    const [value, setValue] = useState([])


    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const classHandler = (e) => {
        setClassName(e.target.value)
    }

    const handleSubmit = () => {
        console.log('jfjdf', name)
        console.log('eeee', className)
        const item = {
            name: name,
            classname: className,
            sNo: Math.random()
        }
        console.log('eeee', item)


        setValue(prev => ([...prev, item]))
        console.log('main value', value) //[]
        setName("");
        setClassName("");

    }

    useEffect(() => {
        if (value.length) {
            localStorage.setItem('data', JSON.stringify(value))
            console.log('heloo',value)
        }
    }, [value])

    useEffect(() => {
       const aa =  JSON.parse(localStorage.getItem('data'))
      console.log("data is:::", aa)
      setValue(aa)

    }, [])

    return (
        <>
            <div className='my-2'>
                <label>Full Name</label>
                <input type='text' value={name} className='form-control w-50' onChange={nameHandler} />
            </div>
            <div className='my-2'>
                <label>Class</label>
                <input type='number' value={className} className='form-control w-50' onChange={classHandler} />
            </div>
            <button type='button' className='btn btn-info' onClick={handleSubmit}>Submit</button>
            <div className='row'>
                <table>
                    <thead>
                        <tr>
                            <th>s.no.</th>
                            <th>Full Name</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                    {value.map((item, index) => {
                        return (<tbody key={index}>
                            <tr>
                                <td>{item.sNo}</td>
                                <td>{item.name}</td>
                                <td>{item.classname}</td>
                            </tr>
                        </tbody>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default InputTableTask
