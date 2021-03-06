import React from 'react'
import { Link, graphql } from 'gatsby'

const Card = () => (
  <>
    {/* card beginning */}
    <div>
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
            <a href="#" className="inline-block">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                reactjs{' '}
              </span>
            </a>
          </div>
          <a href="#" className="block mt-4">
            <p className="text-xl font-semibold text-gray-900">
              Boost your conversion rate
            </p>
            <p className="mt-3 text-base text-gray-500">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </a>
          <div className="mt-6 flex items-center">
            <div className="">
              {/* <p className="text-sm font-medium text-gray-900">
                <span> Salym Akhmedov </span>
              </p> */}
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16"> Mar 16, 2020 </time>
                <span aria-hidden="true"> &middot; </span>
                <span> 6 min read </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* card ending */}
  </>
)

export default Card
