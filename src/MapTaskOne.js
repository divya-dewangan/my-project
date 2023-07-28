import React ,{useState}from 'react'

function MapTaskOne() {

    const[type,setType] = useState("")
    const[list,setList] = useState([])


    const click = () => {
        setList(prev => ([...prev,type]))
        setType("")
    }
    const change = (e) => {
        setType(e.target.value)
    }
  return (
    <>
    <div className='text-center d-flex justify-content-center'>
    <input type='input' placeholder='Type your name' className='form-control w-25 ' value={type} onChange={change}></input>
    <button className='btn btn-primary mx-2' onClick={click}>Add</button>
    </div>
    {list.map((item,indax) => {
        return(<h1 key={indax}>{item}</h1>)
    })}
    </>
  )
}

export default MapTaskOne