import React from "react"
import PropTypes from "prop-types"
import {
  ApplicationContainer,
  ApplicationImage,
  ApplicationText,
  ApplicationLink,
} from "./ApplicationStyle"

const Application = ({ display, url, image }) => {
  return (
    <ApplicationContainer>
      <ApplicationLink to={`/${url}`}>
        <ApplicationImage src={image} alt={display} />
        <ApplicationText>{display}</ApplicationText>
      </ApplicationLink>
    </ApplicationContainer>
  )
}

Application.propTypes = {
  display: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
}

export default Application
