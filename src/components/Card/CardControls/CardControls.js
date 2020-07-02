import React from "react"
import PropTypes from "prop-types"
import Next from "./../../../assets/icons/next.svg"

import { CardControlsContainer, CardControlsButton } from "./CardControlsStyle"

const CardControls = ({ nextStep }) => {
  return (
    <CardControlsContainer>
      <CardControlsButton to={nextStep}>
        <img src={Next} alt="" />
        <p>Suite</p>
      </CardControlsButton>
    </CardControlsContainer>
  )
}

CardControls.propTypes = {
  next: PropTypes.string,
}

export default CardControls
