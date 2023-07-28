import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();


  const redirectTo = (path) => {
    navigate(path)
  }

  return (
    <>
      <ListGroup as="ol" numbered>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/appointment-form')}>Appointment Form</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/card-deling')}>Card-Deling</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/increment-task')}>Increment Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/props-deling')}>Props Deling</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-one')}>Props Task One</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/card')}>Card Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/change-task')}>Change Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/input-task')}>Input Task One</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/input-task-two')}>Input Task Two</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/inputtask-three')}>Input Task Three</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/map-task-one')}>Map Task One</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/map-task-two')}>Map Task Two</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/name-task')}>Name Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/progress-component')}>Progress Component</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/use-ref-task')}>Use Ref Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/ref-task-two')}>Ref Task Two</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/table-task')}>Table Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/table-task-two')}>Table Task Two</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-three')}>Props Three</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-five')}>Props Five</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/tasks-six')}>Card Props</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-seven')}>Image Props</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-eight')}>spiner Props</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-nine')}>Button variant </ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-ten')}>&& Condition Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-eleven')}>Card UseState Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-twelve')}>Card Map Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-thirtine')}>Button Map Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-fourtine')}>Use State Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/task-fifteen')}>Map Tsk</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/use-effect-task-one')}>Use Effect Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/validationTask')}>Validation Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/validation-taskthree')}>Validation Task Three</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/RagistrationValidationTask')}>Ragistration Validation Task</ListGroup.Item>
        <ListGroup.Item as="li" className='mx-5' onClick={() => redirectTo('/form-vlidation')}>Form Validation</ListGroup.Item>
      </ListGroup>
    </>
  )
}

export default Home