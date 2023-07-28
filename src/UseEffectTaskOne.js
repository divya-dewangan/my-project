import React, { useEffect, useState } from 'react'

function UseEffectTaskOne() {

    const [name, setName] = useState("")


    const nameHandlar = (e) => {
        setName(e.target.value)

    }

    useEffect(() => {
        if(name === "abcd"){
        console.log('useEffect calling....',name)
        }

    }, [name])


    return (
        <>
            <div>{name}</div>
            <input type='text' name='name' onChange={nameHandlar} />
        </>
    )
}

export default UseEffectTaskOne