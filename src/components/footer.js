/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="bg-indigo-700 mt-auto">
    <div className="max-w-7xl mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <div className="px-5 py-2">
          <Link to="/" className="text-lg text-indigo-50 hover:text-indigo-300">
            {' '}
            Blog{' '}
          </Link>
        </div>

        <div className="px-5 py-2">
          <Link
            to="/portfolio/"
            className="text-lg text-indigo-50 hover:text-indigo-300"
          >
            {' '}
            Portfolio{' '}
          </Link>
        </div>
      </nav>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/salym-akhmedov/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-50 hover:text-indigo-300"
        >
          <span className="sr-only">LinkedIn</span>
          <svg
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548V16z" />
          </svg>
        </a>

        <a
          href="https://github.com/salymk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-50 hover:text-indigo-300"
        >
          <span className="sr-only">GitHub</span>
          <svg
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <p className="mt-8 text-center text-base text-indigo-50">
        &copy; 2021 ReactJS Nerd. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
