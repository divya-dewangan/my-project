import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function TaskEight({ animation, color }) {
    return (
        <>
            <Spinner animation={animation} variant={color} />

        </>
    )
}

export default TaskEight