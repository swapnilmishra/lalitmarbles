import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import { Typography } from "@material-ui/core"

const toSpaceUpperCased = key => {
  return key
    .toLowerCase()
    .split("_")
    .join(" ")
}

export const buildTilesData = ({ imageURLs }) => {
  return Object.keys(imageURLs).map(imgURLKey => {
    const url = imageURLs[imgURLKey]
    return {
      img: url,
      title: toSpaceUpperCased(imgURLKey),
    }
  })
}

const useStyles = makeStyles(theme => {
  return {
    root: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      textAlign: "center",
    },
    image: {
      width: 150,
      height: 150,
      [theme.breakpoints.down("xs")]: {
        width: 250,
        height: 250,
      },
    },
  }
})

const ImageGrid = ({
  tileData,
  shouldShowLabel = true,
  overrideClasses = {},
}) => {
  let classes = useStyles()
  classes = { ...classes, ...overrideClasses }
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-evenly"
      p={1}
      m={1}
      bgcolor="background.paper"
    >
      {tileData.map(tile => (
        <div className={classes.root} key={tile.title}>
          <img src={tile.img} alt={tile.title} className={classes.image} />
          {shouldShowLabel && (
            <Typography variant="overline" component="h6">
              {tile.title}
            </Typography>
          )}
        </div>
      ))}
    </Box>
  )
}

export default ImageGrid
