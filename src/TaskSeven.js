import React from 'react'
import Image from 'react-bootstrap/Image';

function TaskSeven(props) {
  return (
          
          <Image className='img-fluid'  src='/img/check.jpg'  rounded={props.rounded} roundedCircle={props.roundedCircle
        } thumbnail={props.thumbnail}  />
        
        // <Col xs={6} md={4}>
        //   <Image className='img-fluid' src='/img/check.jpg' roundedCircle />
        // </Col>
        // <Col xs={6} md={4}>
        //   <Image className='img-fluid' src='/img/check.jpg' thumbnail />
        // </Col>
      

  )
}

export default TaskSeven

