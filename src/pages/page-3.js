import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

const ThirdPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello from page 3!</h1>
    <p>This is a post page</p>
    <h3>Image file data</h3>
    <StaticQuery
      query={getImageData}
      render={data => (
        <table>
          <thead>
            <tr>
              <th>Relative path</th>
              <th>Extension</th>
              <th>Size of image</th>
              <th>BirthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map((edge, index) => (
              <tr key={index}>
                <th>{edge.node.relativePath}</th>
                <th>{edge.node.extension}</th>
                <th>{edge.node.size}</th>
                <th>{edge.node.birthTime}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    />
    <Link to="/">Go to homepage</Link>
    <br></br>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default ThirdPage
