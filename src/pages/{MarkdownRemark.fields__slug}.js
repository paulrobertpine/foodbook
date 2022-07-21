import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function Recipe({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const postImage = getImage(frontmatter.cover)

  return (
    <Layout title={frontmatter.title}>
      <article className="recipe">
        <header className="page-header">
          <section className="container">
            <h1 className="chunk">{frontmatter.title}</h1>

            <section className="post-meta">
              <span className="author chunk">{frontmatter.author}</span>
              <span className="serves chunk">Amount: {frontmatter.amount}</span>
              <span className="tags chunk">
                {frontmatter.tags.map((tag) => {
                  return (
                    <Link key={tag} to="#" className="tag">
                      {tag}
                    </Link>
                  )
                })}
              </span>
            </section>
          </section>
        </header>
        <section className="container reading">
          <figure className="post-image">
            <GatsbyImage
              image={postImage}
              alt={frontmatter.title + " cover image"}
            />
          </figure>
          <section
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        author
        amount
        tags
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
