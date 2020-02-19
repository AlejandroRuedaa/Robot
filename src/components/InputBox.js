import React, { Component } from 'react'

const InputBox = (props) =>{
    return(
        <>
         Say something:
         <input value={ props.name } onChange={ props.handleChange } />
         </>
    )
}
export default InputBox
