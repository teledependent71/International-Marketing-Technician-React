import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>International Marketing Technician</title>
        <meta
          property="og:title"
          content="International Marketing Technician"
        />
      </Helmet>
    </div>
  )
}

export default Home
