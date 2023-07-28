import React from 'react'

function InputComponents(props) {
    return (
        <>
            <input type={props.type}
                name={props.name}
                className={props.className}
                placeholder={props.placeholder}
                value={props.value}
                onBlur={props.onBlur}
                onChange={props.onChange} />

        </>
    )
}

export default InputComponents