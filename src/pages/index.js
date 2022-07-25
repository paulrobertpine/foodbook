import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MdClear } from "react-icons/md"
import Layout from "../components/layout"
const title = "Food Buddies"

export default function Home({ data }) {
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.nodes
  const [search, setSearch] = useState("")

  let filteredPosts = posts.filter((post) => {
    return (
      post.frontmatter.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    )
  })

  function showPosts(posts) {
    if (posts.length > 0) {
      return (
        <ol className="posts-grid">
          {posts.map((post) => {
            const postImage = getImage(post.frontmatter.cover)
            return (
              <li key={post.fields.slug} className="posts-grid-item">
                <Link to={post.fields.slug}>
                  <GatsbyImage
                    image={postImage}
                    alt={post.frontmatter.title + " cover image"}
                  />
                  <section className="chunk">
                    <h2>{post.frontmatter.title}</h2>
                  </section>
                </Link>
              </li>
            )
          })}
        </ol>
      )
    } else {
      return <p>No recipes found</p>
    }
  }

  return (
    <Layout title={title}>
      <article id="home">
        <header className="page-header">
          <section className="container">
            <span id="filter-search" className="chunk">
              <input
                type="text"
                placeholder="🔍 Search recipes"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={() => setSearch("")}>
                {search && <MdClear />}
              </button>
            </span>
          </section>
        </header>
        <section className="container">{showPosts(filteredPosts)}</section>
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
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
