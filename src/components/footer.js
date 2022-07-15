import React from "react"
import Link from "gatsby-link"
import { IoArrowUpCircle } from "react-icons/io5"

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
