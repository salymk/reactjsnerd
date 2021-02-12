import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div className="flex flex-col min-h-vh font-sans">
    <Navbar />
    <main className="mt-20">{children}</main>
    <Footer />
  </div>
)

export default Layout
