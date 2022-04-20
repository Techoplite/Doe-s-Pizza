import React from 'react'
import Link from 'next/link'


export default function LandingBtn(props: {
    linkRef: string,
    label: string
}) {
    return (
        <Link href={props.linkRef} passHref >
            <button>{props.label}</button>
        </Link>)
}
