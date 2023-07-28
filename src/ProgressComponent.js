import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressComponent(props) {
  return (
   
    <div>
      <ProgressBar className='m-3' variant={props.color} now={props.now} />
      {/* <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} /> */}
    </div>
  )
}

export default ProgressComponent