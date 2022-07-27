import React from "react"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"

export default function Tags({ data }) {
  const { group } = data.allMarkdownRemark

  return (
    <Layout title="All Tags">
      <article>
        <header className="page-header">
          <section className="container">
            <h1 className="chunk">All Tags</h1>
          </section>
        </header>
        <section className="container">
          <ul className="taglist">
            {group.map((tag) => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
