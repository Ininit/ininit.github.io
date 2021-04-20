import * as React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

type Posts = {
  frontmatter: {
    title?: string
    date: string
    description?: string
  }
  fields: {
    slug: string
  }
  excerpt: string
}

type DataProps = {
  site: {
    siteMetadata: {
      title?: string
    }
  }
  allMarkdownRemark: {
    nodes: Posts[]
  }
}

const BlogIndex = (props: PageProps<DataProps>) => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Ininit`s Blog" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Ininit`s Blog" />
      <div className="">
        <ol className="list-none">
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <li className="no-underline mt-2 mb-6" key={post.fields.slug}>
                <article itemScope itemType="http://schema.org/Article">
                  <header>
                    <h2 className="text-lg">
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small className="text-sm -mt-1 opacity-50">
                      {post.frontmatter.date}
                    </small>
                  </header>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
