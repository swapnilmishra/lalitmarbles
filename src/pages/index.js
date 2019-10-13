import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import Slider from "../components/slider"
import MediaCard from "../components/product-card"
import Container from "@material-ui/core/Container"
import { GraniteImageURLs } from "../components/imageurls"

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
            media: GraniteImageURLs.ALASKA_GOLD,
            caption: "Alaska Gold",
          },
          {
            media: GraniteImageURLs.ALASKA_RED,
            caption: "Alaska Red",
          },
          {
            media: GraniteImageURLs.ALASKA_WHITE,
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
