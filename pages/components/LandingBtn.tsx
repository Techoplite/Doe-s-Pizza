import React from 'react'
import Link from 'next/link'


export default function LandingBtn(props: {
    linkRef: string,
    label: string
}) {
    function handleClick() {
        console.log('btn clicked...');
    }
    return (
        <Link href={props.linkRef} passHref >
            <button onClick={handleClick} >{props.label}</button>
        </Link>
    )
}
