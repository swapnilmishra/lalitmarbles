import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import { Link } from "gatsby-theme-material-ui"
import { GraniteImageURLs, MarblesImagesURLs } from "./imageurls"
import { useMediaQuery } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },
  media: {
    height: 140,
  },
}))

export default function ProductCard() {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMobile = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <Box
      display="flex"
      flexDirection={matchesMobile ? "column" : "row"}
      justifyContent="space-evenly"
      p={1}
      m={1}
      bgcolor="background.paper"
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={MarblesImagesURLs.FOREST_GREEN}
            title="Forest Green Marble"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Marbles
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Marble is a metamorphic rock composed of recrystallized carbonate
              minerals, most commonly calcite or dolomite.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to="/marbles">View all</Link>
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={GraniteImageURLs.BLACK_MARQUINA}
            title="Black Marquina Granite"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Granites
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Granite is a common type of felsic intrusive igneous rock that is
              granular and phaneritic in texture.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to="/granites">View all</Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
