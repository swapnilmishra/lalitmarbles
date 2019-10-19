import React from "react"
import Slide from "react-reveal/Slide"
import makeCarousel from "react-reveal/makeCarousel"

const styles = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: 400,
}
const Container = ({ children }) => {
  return <div style={styles}>{children}</div>
}

const CarouselUI = ({ children }) => <Container> {children} </Container>
const Carousel = makeCarousel(CarouselUI)

export default ({ screens }) => {
  return (
    <Carousel defaultWait={2000} /*wait for 1000 milliseconds*/>
      {screens.map((screen, index) => (
        <Slide right>
          <img
            src={screen.media}
            key={index}
            style={{ width: "100vw", margin: "0 auto" }}
          />
        </Slide>
      ))}
    </Carousel>
  )
}
