import React from "react"
import PropTypes from "prop-types"
import hearth from "./../../../assets/icons/hearth.svg"
import next from "./../../../assets/icons/next.svg"

import { CardControlsContainer, CardControlsButton } from "./CardControlsStyle"

const CardControls = ({ likes, nextStep }) => {
  return (
    <CardControlsContainer>
      <CardControlsButton onClick={likes}>
        <img src={hearth} alt="" />
        <p>Likes</p>
      </CardControlsButton>

      <CardControlsButton onClick={nextStep}>
        <img src={next} alt="" />
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
