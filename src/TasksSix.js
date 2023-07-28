import React from 'react'
import CardComponent from './ReusableComponent/CardComponent';


function TasksSix() {
  return (
    <>
    <div className='d-flex justify-content-center'>
      <CardComponent header='Class' style={{ width: '30rem', height: '200px' }} bg='primary' className="m-2 mt-5 text-center" title='Class Name' Pairagraph='This is class 12 , there is 23 student and 5 subject teacher avalible.' />
   </div>
    </>
  )
}


export default TasksSix