import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import AlaskaGold from "./../images/granites/alaska_gold.jpeg"
import AlaskaRed from "./../images/granites/alaska_red.jpeg"
import AlaskaWhite from "./../images/granites/alaska_white.jpeg"
import Slider from "../components/slider"
import MediaCard from "../components/product-card"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles({
  slider: {
    marginBottom: 80,
  },
})

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Slider
        className={`image-slider ${classes.slider}`}
        screens={[
          {
            media: AlaskaGold,
            caption: "Alaska Gold",
          },
          {
            media: AlaskaRed,
            caption: "Alaska Red",
          },
          {
            media: AlaskaWhite,
            caption: "Alaska White",
          },
        ]}
      />
      <Container>
        <MediaCard />
      </Container>
    </Layout>
  )
}

export default IndexPage
