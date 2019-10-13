import React, { Component } from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "./../css/slider-override.css"

const SliderHOC = WrappedComponent => {
  return class extends Component {
    renderScreens() {
      return this.props.screens.map((screen, index) => (
        <div
          key={`${this.props.name}-screen-${index}`}
          data-src={screen.media}
          style={{
            backgroundColor: screen.backgroundColor,
          }}
        >
          <div className="image-slider__content caption">
            <p>{screen.caption}</p>
          </div>
        </div>
      ))
    }

    render() {
      return (
        <WrappedComponent {...this.props}>
          {this.renderScreens()}
        </WrappedComponent>
      )
    }
  }
}

const CaptionedComponent = SliderHOC(AwesomeSlider)

export default function(props) {
  return <CaptionedComponent transitionDelay={100} {...props} />
}
