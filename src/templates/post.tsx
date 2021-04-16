/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'

import 'katex/dist/katex.min.css'

interface PostProps {
  data: any
}

export default function Post(props: PostProps) {
  console.log(props)
  return <div>hello word</div>
}

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(truncate: true, format: PLAIN)
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        tags
        keywords
        update(formatString: "MMM DD, YYYY")
      }
    }
  }
`
