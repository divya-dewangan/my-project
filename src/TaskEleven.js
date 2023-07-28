import React, { useState } from 'react'
import { Button,Card } from 'react-bootstrap';

function TaskEleven() {

    const [value,setValue]=useState(false)
    const handleClick = () => {
        setValue(!value)
    }
  return (
       <>
   {value ?(<Card bg='primary' className='m-4' style={{ width: '18rem' }}>
      <Card.Body >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>):
    (<Card bg='danger' className='m-4' style={{ width: '18rem' }}>
      <Card.Body >
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>)}
    <button className='btn btn-primary' onClick={handleClick}>Click</button>
    </>

  );
}



export default TaskEleven