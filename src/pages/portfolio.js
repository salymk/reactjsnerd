import React from 'react'
import Layout from '../components/layout'

const Portfolio = () => (
  <>
    <Layout>
      <div className="bg-white pt-4 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-4 divide-indigo-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-indigo-700 sm:text-4xl">
              Currently working rebuilding my old portfolio website{' '}
              <a
                className="text-gray-900 hover:text-indigo-700"
                href="https://salymakhmedov.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                salymakhmedov.dev
              </a>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default Portfolio
