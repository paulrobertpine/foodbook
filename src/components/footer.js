import React from "react"
import Link from "gatsby-link"

export default function Footer() {
  return (
    <footer id="site-footer">
      <section className="container">
        <span className="chunk">
          © <Link to="/">Food Buddies</Link> {new Date().getFullYear()}
        </span>
      </section>
    </footer>
  )
}
