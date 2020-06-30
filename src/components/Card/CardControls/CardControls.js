import React from "react"
import PropTypes from "prop-types"
import Next from "./../../../assets/icons/next.svg"

import { CardControlsContainer, CardControlsButton } from "./CardControlsStyle"

const CardControls = ({ likes, nextStep }) => {
  return (
    <CardControlsContainer>
      <CardControlsButton onClick={nextStep}>
        <img src={Next} alt="" />
        <p>Suite</p>
      </CardControlsButton>
    </CardControlsContainer>
  )
}

CardControls.propTypes = {
  likes: PropTypes.string,
  next: PropTypes.string,
}

export default CardControls
