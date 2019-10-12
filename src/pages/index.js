import React from "react"
import { Link } from "gatsby-theme-material-ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

const Slider = () => (
  <AwesomeSlider>
    <div data-src="/granites/Alaska Gold.jpeg" />
    <div data-src="/granites/alaska red.jpeg" />
    <div data-src="/granites/Alaska White.jpeg" />
  </AwesomeSlider>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
      <Link to="/about/">Go to About page</Link>
    </div>
    <Slider />
  </Layout>
)

export default IndexPage
