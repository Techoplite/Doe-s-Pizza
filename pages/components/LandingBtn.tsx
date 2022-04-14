import React from 'react'

export default function LandingBtn(props) {
    function handleClick() {
        console.log('btn clicked...');
    }
    return (
        <button onClick={handleClick} >{props.label}</button>
    )
}
