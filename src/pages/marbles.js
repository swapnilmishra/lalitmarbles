import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"
import { MarblesImagesURLs } from "../components/imageurls"
import ImageGrid, { buildTilesData } from "./../components/imagegrid"

const featuredTiles = [
  MarblesImagesURLs.ARNA_BROWN,
  MarblesImagesURLs.FOREST_GREEN,
  MarblesImagesURLs.UDAIPUR_PINK,
  MarblesImagesURLs.SPIDER_GREEN,
]

const MarblesPage = () => {
  return (
    <Layout>
      <SEO title="Marbles" />
      <Container>
        <ImageGrid
          tileData={buildTilesData({
            featuredTiles,
            imageURLs: MarblesImagesURLs,
          })}
        />
      </Container>
    </Layout>
  )
}

export default MarblesPage
