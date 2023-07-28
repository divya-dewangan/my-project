import React from 'react'
import Card from 'react-bootstrap/Card';

function TaskFifteen() {
    return (
        <>
            {[
                'Ankit',
                'Divya',
                'Pankaj',
                'Khelu'].map((itam, index) => (

                    <>

                        <Card style={{ width: '18rem' , margin:'10px' }} bg='primary'>
                            <Card.Body >
                                <Card.Text
                                    variant={itam}
                                    key={index}
                                    className=' fs-1 m-2 '
                                >
                                    {itam}</Card.Text>


                            </Card.Body>
                        </Card >
                    </>



                ))
            }
        </>
    )
}

export default TaskFifteen


