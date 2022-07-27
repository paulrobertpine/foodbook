import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function Tag({ data, pageContext }) {
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.nodes

  return (
    <Layout title={pageContext.tag + " Recipes"}>
      <article className="tag">
        <header className="page-header">
          <section className="container">
            <h1 className="chunk">
              {allMarkdownRemark.totalCount} Recipes Tagged{" "}
              <em>{pageContext.tag}</em>
            </h1>
          </section>
        </header>
        <section className="container">
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
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___title }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
      totalCount
    }
  }
`
