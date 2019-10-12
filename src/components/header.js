import PropTypes from "prop-types"
import React from "react"

import AppBar from "./appbar"

const Header = ({ siteTitle }) => <AppBar title={siteTitle} />

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
