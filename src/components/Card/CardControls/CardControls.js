import React from "react"
import PropTypes from "prop-types"
import Next from "./../../../assets/icons/next.svg"
import { CardControlsContainer, CardControlsButton } from "./CardControlsStyle"

const CardControls = ({ nextPath }) => {
  return (
    <CardControlsContainer>
      <CardControlsButton to={nextPath}>
        <img src={Next} alt="" />
        <p>Suite</p>
      </CardControlsButton>
    </CardControlsContainer>
  )
}

CardControls.propTypes = {
  nextPath: PropTypes.string,
}

export default CardControls
