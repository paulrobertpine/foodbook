import React from "react"
import Link from "gatsby-link"
import HeaderIcon from "../images/icon.svg"

export default function Header() {
  return (
    <header id="site-header">
      <section className="container">
        <Link to="/" id="site-logo">
          <HeaderIcon />
          <span>Food Buddies</span>
        </Link>
      </section>
    </header>
  )
}
