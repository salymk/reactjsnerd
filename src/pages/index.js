/* eslint-disable react/prop-types */
import React from 'react'
import { Link, graphql } from 'gatsby'
import parse from 'html-react-parser'
import Img from 'gatsby-image'
import Seo from 'gatsby-plugin-wpgraphql-seo'
import { v4 as uuidv4 } from 'uuid'

import Layout from '../components/layout'

const Index = ({ data }) => {
  const tagColor = tagName => {
    if (tagName === 'reactjs') {
      return 'bg-indigo-100 text-indigo-800'
    }
    if (tagName === 'epicreactdev') {
      return 'bg-gray-100 text-gray-800'
    }
    if (tagName === 'gatsbyjs') {
      return 'bg-purple-100 text-purple-800'
    }
    if (tagName === 'react fundamentals') {
      return 'bg-indigo-100 text-indigo-800'
    }
    if (tagName === 'react hooks') {
      return 'bg-green-100 text-green-800'
    }
    return 'bg-indigo-100 text-indigo-800'
  }

  return (
    <>
      <Layout>
        <Seo post={data.wpPage} />
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        <div className="bg-white z-10 pt-4 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
          <div className="relative max-w-lg mx-auto divide-y-4 divide-indigo-200 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-indigo-700 sm:text-4xl">
                Let's get great at reactjs, together
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4 lg:max-w-2xl">
                Hey nerds, my name is{' '}
                <a
                  className="font-medium text-indigo-700 hover:text-indigo-900"
                  href="https://www.linkedin.com/in/salym-akhmedov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Salym Akhmedov
                </a>
                , and I want to get great at reactjs, so I started this blog to
                share what I learn and so that the knowledge does not fall from
                my slippery brain.
              </p>
            </div>
            <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {data.allWpPost.nodes.map(post => (
                <div key={uuidv4()} className="group">
                  <Link to={post.slug}>
                    <div className="relative">
                      <Img
                        className="absolute w-full h-full object-cover rounded-lg shadow-md mb-4"
                        fluid={
                          post.featuredImage.node.localFile.childImageSharp
                            .fluid
                        }
                        alt={post.featuredImage.node.altText}
                      />
                    </div>
                    <div className="relative px-4 -mt-20">
                      <div className="transition duration-500 ease-in-out bg-white p-4 rounded-lg shadow-lg hover:shadow-xl border-2 border-white group-hover:border-indigo-500">
                        <div>
                          <div className="max-w-2xl">
                            <div className="mx-auto">
                              {post.tags.nodes.map(tag => (
                                <span
                                  key={uuidv4()}
                                  className={`mr-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${tagColor(
                                    tag.name
                                  )} `}
                                >
                                  {tag.name}{' '}
                                </span>
                              ))}
                            </div>
                          </div>
                          {/* ${
                              tag.name === 'reactjs'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-indigo-100 text-indigo-800'
                            } */}
                        </div>
                        <p className="transition duration-500 ease-in-out mt-4 text-xl font-semibold text-gray-900 group-hover:text-indigo-800">
                          {post.title}
                        </p>
                        <p className="transition duration-500 ease-in-out mt-3 text-base text-gray-500 group-hover:text-indigo-500">
                          {parse(post.excerpt)}
                        </p>
                        <div className="mt-6 flex items-center">
                          <div className="">
                            {/* <p className="text-sm font-medium text-gray-900">
                <span> Salym Akhmedov </span>
              </p> */}
                            <div className="transition duration-500 ease-in-out flex space-x-1 text-sm text-gray-500 group-hover:text-indigo-500">
                              <time dateTime="2020-03-16"> {post.date} </time>
                              {/* <span aria-hidden="true"> &middot; </span>
                              <span> 2 min read </span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
        tags {
          nodes {
            name
          }
        }
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

    wpPage(slug: { eq: "home" }) {
      title
      seo {
        title
        metaDesc
        focuskw
        metaKeywords
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphTitle
        opengraphDescription
        opengraphImage {
          altText
          sourceUrl
          srcSet
        }
        twitterTitle
        twitterDescription
        twitterImage {
          altText
          sourceUrl
          srcSet
        }
        canonical
        cornerstone
        schema {
          articleType
          pageType
          raw
        }
      }
    }
  }
`
