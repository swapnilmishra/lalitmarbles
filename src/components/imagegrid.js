import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    transform: "translateZ(0)",
    backgroundColor: theme.palette.common.black,
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}))

const toSpaceCased = key => {
  return key
    .toLowerCase()
    .split("_")
    .join(" ")
}

export const buildTilesData = ({ featuredTiles, imageURLs }) => {
  return Object.keys(imageURLs).map(imgURLKey => {
    const url = imageURLs[imgURLKey]
    return {
      img: url,
      title: toSpaceCased(imgURLKey),
      author: toSpaceCased(imgURLKey),
      featured: featuredTiles.includes(url) ? true : false,
    }
  })
}

export default ({ tileData }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
