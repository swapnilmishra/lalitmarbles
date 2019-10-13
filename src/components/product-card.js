import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import ForestGreen from "./../images/marbles/Forest green.jpg"
import BlackMarquina from "./../images/granites/Black Marquina.jpeg"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function MediaCard() {
  const classes = useStyles()

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      p={1}
      m={1}
      bgcolor="background.paper"
    >
      <Box p={1}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={ForestGreen}
              title="Forest Green Marble"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Marbles
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Marble is a metamorphic rock composed of recrystallized
                carbonate minerals, most commonly calcite or dolomite.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View all
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box p={1}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={BlackMarquina}
              title="Black Marquina Granite"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Granites
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Granite is a common type of felsic intrusive igneous rock that
                is granular and phaneritic in texture.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View all
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
}
