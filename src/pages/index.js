import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"
import ProductCard from "../components/product-card"
import { SlideshowImageURLs } from "../components/imageurls"

const IndexPage = () => {
  return (
    <Layout
      fullWidthContent={<Slider images={Object.values(SlideshowImageURLs)} />}
    >
      <SEO title="Home" />
      <ProductCard />
    </Layout>
  )
}

export default IndexPage
