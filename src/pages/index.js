/* eslint-disable react/prop-types */
import React from 'react'
import { Link, graphql } from 'gatsby'
import parse from 'html-react-parser'
import Layout from '../components/layout'

const Index = ({ data }) => (
  <>
    <Layout>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className="bg-white z-10 pt-4 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-4 divide-indigo-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-indigo-700 sm:text-4xl">
              Let's get really good at reactjs, together
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4 lg:max-w-2xl">
              I want to get really good at reactjs, so I started this blog to
              write articles on what I learn so that the knowledge does not fall
              from my slippry brain
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {data.allWpPost.nodes.map(post => (
              <div key={post.slug}>
                <div className="relative pb-2/3">
                  <img
                    className="absolute w-full h-full object-cover rounded-lg shadow-md mb-4"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                    alt=""
                  />
                </div>
                <div className="relative px-4 -mt-20">
                  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
                    <div>
                      <div className="inline-block">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          reactjs{' '}
                        </span>
                      </div>
                    </div>
                    <Link to={post.slug} className="block mt-4">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {parse(post.excerpt)}
                      </p>
                    </Link>
                    <div className="mt-6 flex items-center">
                      <div className="">
                        {/* <p className="text-sm font-medium text-gray-900">
                <span> Salym Akhmedov </span>
              </p> */}
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime="2020-03-16"> {post.date} </time>
                          <span aria-hidden="true"> &middot; </span>
                          <span> 6 min read </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default Index

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
