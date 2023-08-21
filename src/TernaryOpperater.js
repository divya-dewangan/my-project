import React, { useState } from 'react'
// import { FaEye ,FaEyeSlash} from 'react-icons/fa'
import { AiFillUnlock } from "react-icons/ai"
import { BsFillUnlockFill } from "react-icons/bs"

function TernaryOpperater() {
    const [flag, setFlag] = useState(false)

    const passwordHandler = () => {
        setFlag(!flag)
    }
    return (
        <>
            <div className="input-group m-3 ">
                <input type={!flag ? "password" : "text"} className="w-25 " placeholder="Username"  aria-label="Username" aria-describedby="basic-addon1" />
                <span className="input-group-text" onClick={passwordHandler} id="basic-addon1">{!flag ? <BsFillUnlockFill /> : <AiFillUnlock /> }</span> 
            </div>
        </>
    )
}

export default TernaryOpperater