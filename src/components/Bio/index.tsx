/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            summary
            stack
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="pt-6 pb-10">
      <StaticImage
        className="mb-2"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../../images/avatar.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <div>
        <p className="text-xl">{author?.summary || null}</p>
        <p className="text-sm opacity-80">{author?.stack}</p>
      </div>
    </div>
  )
}

export default Bio
