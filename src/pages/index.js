import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
const title = "Food Buddies"

export default function Home({ data }) {
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.nodes
  const [search, setSearch] = useState("")
  const [shuffled, setShuffled] = useState(1)

  return (
    <Layout title={title}>
      <article id="home">
        <header className="page-header">
          <section className="container">search widget, etc</section>
        </header>
        <section className="grid container">grid goes here</section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___title }) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}
