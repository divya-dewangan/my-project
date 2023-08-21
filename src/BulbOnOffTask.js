import React, { useState } from 'react'

function BulbOnOffTask() {
    const [onBulb, setOnBulb] = useState(false)

    const handler = () => {
        setOnBulb(!onBulb)

    }
    return (
        <>
            {onBulb && <div><img alt='bulbon' className='w-25' src='/img/bulb-off.jpg' /> </div>}
            {!onBulb && <div><img alt='offBulb' className='w-25' src='/img/bulb-on.png' /></div>}
               {onBulb && <button className='btn btn-success mx-2 my-3 w-25' onClick={handler}>On</button>}
               {!onBulb && <button className='btn btn-danger my-3 w-25 ' onClick={handler}>Off</button>}
            
        </>
    )
}

export default BulbOnOffTask