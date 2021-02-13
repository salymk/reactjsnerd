// /* eslint-disable react/prop-types */
// import React from 'react'
// import { Link, graphql } from 'gatsby'
// import parse from 'html-react-parser'

// import Layout from '../components/layout'
// import SEO from '../components/seo'

// const BlogIndex = ({
//   data,
//   pageContext: { nextPagePath, previousPagePath },
// }) => {
//   const posts = data.allWpPost.nodes

//   if (!posts.length) {
//     return (
//       <Layout isHomePage>
//         <SEO title="All posts" />
//         <p>
//           No blog posts found. Add posts to your WordPress site and they'll
//           appear here!
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout isHomePage>
//       <SEO title="All posts" />

//       <ol style={{ listStyle: `none` }}>
//         {posts.map(post => (
//           <div key={post.uri}>
//             <div className="relative pb-2/3">
//               <img
//                 className="absolute w-full h-full object-cover rounded-lg shadow-md mb-4"
//                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
//                 alt=""
//               />
//             </div>
//             <div className="relative px-4 -mt-20">
//               <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
//                 <div>
//                   <div className="inline-block">
//                     <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
//                       reactjs{' '}
//                     </span>
//                   </div>
//                 </div>
//                 <Link to={post.uri} className="block mt-4">
//                   <p className="text-xl font-semibold text-gray-900">
//                     {post.title}
//                   </p>
//                   <p className="mt-3 text-base text-gray-500">
//                     {parse(post.excerpt)}
//                   </p>
//                 </Link>
//                 <div className="mt-6 flex items-center">
//                   <div className="">
//                     {/* <p className="text-sm font-medium text-gray-900">
//                 <span> Salym Akhmedov </span>
//               </p> */}
//                     <div className="flex space-x-1 text-sm text-gray-500">
//                       <time dateTime="2020-03-16"> {post.date} </time>
//                       <span aria-hidden="true"> &middot; </span>
//                       <span> 6 min read </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </ol>

//       {previousPagePath && (
//         <>
//           <Link to={previousPagePath}>Previous page</Link>
//           <br />
//         </>
//       )}
//       {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
//     </Layout>
//   )
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
//     allWpPost(
//       sort: { fields: [date], order: DESC }
//       limit: $postsPerPage
//       skip: $offset
//     ) {
//       nodes {
//         excerpt
//         uri
//         date(formatString: "MMMM DD, YYYY")
//         title
//         excerpt
//       }
//     }
//   }
// `
