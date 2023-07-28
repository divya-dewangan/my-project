import React, { useState } from 'react'

function AreTaskOne() {
    const [value] = useState([
        {
            name: 'divya',
            age: 23
        },
        {
            name: 'durga',
            age: 22
        }])
    return (
        <>
            {value.map((item, index) => {
                return (<div key={index}>
                    <span>{item.name} </span>
                    <span>{item.age} </span>
                </div>)
            }
            )}
        </>
            )
}

export default AreTaskOne