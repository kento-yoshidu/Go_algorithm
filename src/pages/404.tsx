import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"

interface Props {
  data: GatsbyTypes.NotFoundQuery
  location: string
}
const NotFoundPage: React.VFC<Props> = ({ data, location }) => (
  <>
    <Seo
      title="404: Not Found"
      description="ページが見つかりません"
      lang="ja"
    />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound{
    site {
      siteMetadata {
        title
      }
    }
  }
`
