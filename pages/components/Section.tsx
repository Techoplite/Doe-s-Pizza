import React from "react";

export default function section(props) {
  return <section className={props.styleName}>
    <div className={props.overlayName}>
      <span >{props.children}</span>
    </div>
  </section>
}

