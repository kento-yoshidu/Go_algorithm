import * as React from "react"
import { Link, graphql } from "gatsby"
import "twin.macro"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

type Props = {
  location: {
    pathname: string
  }
}

const BlogIndex: React.VFC<Props> = ({ data, location }) => {
  return (
    {data.allGraphCmsAuthor.map(({node}) => (
      <p>node.name</p>
    )
    )}
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query Test {
    allGraphCmsAuthor(filter: {stage: {eq: PUBLISHED}}) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
