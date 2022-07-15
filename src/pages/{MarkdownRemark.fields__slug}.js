import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"

export default function Recipe({ data }) {
  const { frontmatter, rawMarkdownBody } = data.markdownRemark

  return (
    <Layout title={frontmatter.title}>
      <article className="recipe">
        <header className="page-header">
          <section className="container">
            <h1>{frontmatter.title}</h1>
          </section>
        </header>
        <section
          className="reading"
          dangerouslySetInnerHTML={{ __html: rawMarkdownBody }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      rawMarkdownBody
    }
  }
`
