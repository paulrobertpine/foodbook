import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImPriceTags } from "react-icons/im"
import Layout from "../components/layout"

export default function Tag({ data, pageContext }) {
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.nodes

  return (
    <Layout title={pageContext.tag + " Recipes"}>
      <article className="tag">
        <header className="page-header">
          <section className="container inline">
            <h1 className="chunk">
              <em>{pageContext.tag}</em> Recipes ({allMarkdownRemark.totalCount}
              )
            </h1>
            <Link to="/tags/" className="chunk icon-link">
              <ImPriceTags /> See all tags
            </Link>
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
