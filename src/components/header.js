import React from "react"
import Link from "gatsby-link"
// import HeaderIcon from "../images/musician.inline.svg"

export default function Header({ title }) {
  return (
    <header id="site-header">
      <section className="container">
        <Link to="/" id="site-logo">
          {/* <HeaderIcon /> */}here
          <h1 className="fancy chunk">{title}</h1>
        </Link>
      </section>
    </header>
  )
}
