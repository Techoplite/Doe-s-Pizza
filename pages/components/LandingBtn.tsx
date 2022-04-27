import React from 'react'
import Link from 'next/link'


export default function LandingBtn(props: {
    linkRef: string | null,
    label: string,
    handler: Function | null
}) {
    function handleClick() {
        props.handler && props.handler()
    }
    return (
        props.linkRef ?
            <Link href={props.linkRef} passHref >
                <button >{props.label}</button>
            </Link> :
            <button onClick={handleClick} >{props.label}</button>

    )
}
