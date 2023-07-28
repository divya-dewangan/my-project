import React from 'react'
import { Button } from 'react-bootstrap'


function TaskThirtine() {
    return (
        <>
            {[
                'Primary',
                'Secondary',
                'Success',
                'Danger',
                'Warning',
                'Info',
                'Light',
                'Dark'].map((variant, index) => (
                    <Button
                        variant={variant.toLowerCase()}
                        key={index}
                        style={{ width: '18rem' ,fontSize: '30px' }}
                        className="m-4"
                    >
                        {variant}</Button>



                ))
            }
        </>
    )
}

export default TaskThirtine