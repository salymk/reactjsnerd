/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  console.log(post.featuredImage.node.localFile.childImageSharp.fluid)
  return (
    <Layout>
      <div className="py-16 bg-white overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Img
              className="w-full h-full object-cover mb-12"
              fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
            />
          </div>
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {post.title}
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <article className="prose lg:prose-xl">
              {parse(post.content)}
            </article>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

// /* eslint-disable react/prop-types */
// import React from 'react'
// import { Link, graphql } from 'gatsby'
// import Image from 'gatsby-image'
// import parse from 'html-react-parser'

// // We're using Gutenberg so we need the block styles
// import '@wordpress/block-library/build-style/style.css'
// import '@wordpress/block-library/build-style/theme.css'

// import Layout from '../components/layout'
// import SEO from '../components/seo'

// const BlogPostTemplate = ({ data: { previous, next, post } }) => {
//   const featuredImage = {
//     fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
//     alt: post.featuredImage?.node?.alt || ``,
//   }

//   return (
//     <Layout>
//       <SEO title={post.title} description={post.excerpt} />

//       <article
//         className="blog-post"
//         itemScope
//         itemType="http://schema.org/Article"
//       >
//         <header>
//           <h1 itemProp="headline">{parse(post.title)}</h1>

//           <p>{post.date}</p>

//           {/* if we have a featured image for this post let's display it */}
//           {featuredImage?.fluid && (
//             <Image
//               fluid={featuredImage.fluid}
//               alt={featuredImage.alt}
//               style={{ marginBottom: 50 }}
//             />
//           )}
//         </header>

//         {!!post.content && (
//           <section itemProp="articleBody">{parse(post.content)}</section>
//         )}

//         <hr />

//         <footer />
//       </article>

//       <nav className="blog-post-nav">
//         <ul
//           style={{
//             display: `flex`,
//             flexWrap: `wrap`,
//             justifyContent: `space-between`,
//             listStyle: `none`,
//             padding: 0,
//           }}
//         >
//           <li>
//             {previous && (
//               <Link to={previous.uri} rel="prev">
//                 ← {parse(previous.title)}
//               </Link>
//             )}
//           </li>

//           <li>
//             {next && (
//               <Link to={next.uri} rel="next">
//                 {parse(next.title)} →
//               </Link>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </Layout>
//   )
// }

// export default BlogPostTemplate

// export const pageQuery = graphql`
//   query BlogPostById(
//     # these variables are passed in via createPage.pageContext in gatsby-node.js
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     # selecting the current post by id
//     post: wpPost(id: { eq: $id }) {
//       id
//       excerpt
//       content
//       title
//       date(formatString: "MMMM DD, YYYY")

//       featuredImage {
//         node {
//           altText
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 1000, quality: 100) {
//                 ...GatsbyImageSharpFluid_tracedSVG
//               }
//             }
//           }
//         }
//       }
//     }

//     # this gets us the previous post by id (if it exists)
//     previous: wpPost(id: { eq: $previousPostId }) {
//       uri
//       title
//     }

//     # this gets us the next post by id (if it exists)
//     next: wpPost(id: { eq: $nextPostId }) {
//       uri
//       title
//     }
//   }
// `
