import React from 'react'
import CardComponent from './ReusableComponent/CardComponent'

function CardDeleing() {
    
    return (
        <>
             <CardComponent header='Class' style={{ width : '18rem', height: '200px' }} bg='primary' className="m-2 mt-5" title='Class Name' btnName='Click' btnBg='success' pairagraph='This is class 12 , there is 23 student and 5 subject teacher avalible.'/>
            <CardComponent header='School' style={{ width : '18rem', height: '200px' }} bg='success' className="m-4" title='School Name' btnName='Click' btnBg='warning' pairagraph='School Name is kcps kurud .sandhaari chhatisgardh'/>
            <CardComponent header='ClassRoom' style={{ width : '18rem', height: '200px' }} bg='danger' className="m-1" title='Room Number' btnName='Click' btnBg='info' pairagraph='this is our classmroom . 25 student are study in thihclass'/> 
       
        </>

    )
}

export default CardDeleing