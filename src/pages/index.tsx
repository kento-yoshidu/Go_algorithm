import * as React from "react"
import { Link, graphql } from "gatsby"
import "twin.macro"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// 使用したいアイコンをインポート
import { faUserEdit } from "@fortawesome/free-solid-svg-icons"

type Props = {
  data: GatsbyTypes.blogListQuery
  location: {
    pathname: string
  }
}

const BlogIndex: React.VFC<Props> = ({ data, location }) => (
  <>
    <FontAwesomeIcon icon={faUserEdit} />
    <p tw="text-3xl font-bold py-2">aaa</p>
    {data.allGraphCmsAuthor.edges.map(({node}) => (
        <div key={node.name}>
          <p tw="text-3xl font-bold py-2">aaa</p>
          <p>{node.name}</p>
          <p>{node.slug}</p>
        </div>
    )
    )}
  </>
)

export default BlogIndex

export const query = graphql`
  query blogList {
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
