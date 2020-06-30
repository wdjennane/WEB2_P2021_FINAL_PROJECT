import React from "react"
import PropTypes from "prop-types"
import Hearth from "./../../../assets/icons/hearth.svg"
import Next from "./../../../assets/icons/next.svg"

import { CardControlsContainer, CardControlsButton } from "./CardControlsStyle"

const CardControls = ({ likes, nextStep }) => {
  return (
    <CardControlsContainer>
      <CardControlsButton onClick={likes}>
        <img src={Hearth} alt="" />
        <p>Likes</p>
      </CardControlsButton>

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
