// import React, { useRef } from 'react';


// function UseRefTask() {

//     const myUseRef = useRef();
//     const lastName = useRef();
//     const mobile = useRef();

//     const handleClick  =() => {
//         console.log("OKKK 1::::", myUseRef.current.value)
//         console.log("OKKK 2::::", lastName.current.value)
//         console.log("OKKK 3::::", mobile.current.value)
//         // mobile.current.style.color ="red"
//         // mobile.current.focus()

//     }
//     return (
//         <>
//         <input type='text' ref={myUseRef}  placeholder='First name'/>
//         <input type='text' ref={lastName}  placeholder='Last name'/>
//         <input type='text' ref={mobile}  placeholder='Mobile'/>
//         <textarea></textarea>
//         <button type='button' onClick={handleClick}>Click</button>
//         </>
//     )
// }

// export default UseRefTask


import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonComponents from './ReusableComponent/ButtonComponents'

function UseRefTask() {
  const text = useRef();
  const navigate = useNavigate();


  const handleClick = () => {
    console.log("hello.....", text.current.value)
    text.current.style.color = 'blue'
    text.current.focus()
  }

  const clickHandlar = () => {
    console.log('yeyyy..')
    navigate('/task-eight')
  }

  return (
    <>
      <button type='button' onClick={handleClick}>Action</button>
      <label>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, obcaecati nisi iste pariatur odio dignissimos provident vero laboriosam fuga omnis nesciunt odit iusto dolorem eveniet adipisci! Molestias ab modi dolores?
      </label>
      <textarea className='w-50' ref={text}></textarea>
      <div>
        <button type='button' className='btn btn-info text-center m-3' onClick={clickHandlar}>Redirect to home page</button>
        <ButtonComponents variant="info" name="Test" />
      </div>
    </>
  )
}

export default UseRefTask