import React from "react"
import Slide from "react-reveal/Slide"
import makeCarousel from "react-reveal/makeCarousel"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  sliderRoot: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
  },
  sliderCommon: {
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    [theme.breakpoints.up("sm")]: {
      height: 500,
    },
    [theme.breakpoints.up("lg")]: {
      height: 700,
    },
  },
  sliderImage: {
    width: "100%",
    margin: "0 auto",
  },
}))

const Container = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={`${classes.sliderRoot} ${classes.sliderCommon}`}>
      {children}
    </div>
  )
}

const CarouselUI = ({ children }) => <Container> {children} </Container>
const Carousel = makeCarousel(CarouselUI)

export default ({ images, waitTime = 3000 }) => {
  const classes = useStyles()
  return (
    <Carousel defaultWait={waitTime} maxTurns={Infinity}>
      {images.map((imageURL, index) => (
        <Slide right key={index}>
          <img
            src={imageURL}
            alt={imageURL}
            className={`${classes.sliderImage}  ${classes.sliderCommon}`}
          />
        </Slide>
      ))}
    </Carousel>
  )
}
