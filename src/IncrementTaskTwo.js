import React, { useState } from 'react'
import ChildIncrementTwo from './ChildComponent/ChildIncrementTwo'

function IncrementTaskTwo() {
    const[data,setData]=useState(0)
        
    const datasend = () => {
        setData(data + 1)
    }
    
    const dicrementdata = () => {
        setData(data - 1)
    }
    
    return (
        <>
        <ChildIncrementTwo flag={data} sendIncrementClid={datasend} senddicrementClid={dicrementdata} />
        <ChildIncrementTwo flag={data} sendIncrementClid={datasend} senddicrementClid={dicrementdata} />
        </>
    )
}

export default IncrementTaskTwo