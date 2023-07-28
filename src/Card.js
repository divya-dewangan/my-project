import React from 'react'
import './Card.css'

function Card() {
    // const internalCss = { fontSize: '30px', color: 'yellow' };
    // const secondInternal = { fontSize: '40px', TextDecoder: 'bold' }

    const mainCss = {
        internalCss: {
            fontSize: '30px',
            color: 'yellow'
        },
        secondInternal: {
            fontSize: '40px',
            TextDecoder: 'bold'
        },
        thirdInternal: {
            fontSize: '50px',
            color: 'pink'
        }

    }

    return (
        <>
            <div className='div'>Card</div>
            <div style={{ color: 'red' }}>Second Text</div>
            <div style={{ fontSize: '30px' }}>Third Text</div>
            <div style={{ fontSize: '30px', color: 'blue' }}>Fourth Text</div>
            <div style={mainCss.internalCss}>Fifth Text</div>
            <div style={mainCss.secondInternal}> My socond internalCss</div>
            <div style={mainCss.thirdInternal}> My name is divya</div>
        </>
    )
}

export default Card