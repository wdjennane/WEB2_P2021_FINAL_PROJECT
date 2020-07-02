import React from "react"
import PropTypes from "prop-types"
import Cross from "./../../../assets/icons/cross.svg"
import Back from "./../../../assets/icons/back.svg"
import Check from "./../../../assets/icons/check.svg"

import {
  CardInteractionContainer,
  CardInteractionButton,
} from "./CardInteractionStyle"

const CardInteraction = ({ incorrectPath, goBack, correctPath }) => {
  return (
    <CardInteractionContainer>
      <CardInteractionButton to={incorrectPath}>
        <img src={Cross} alt="" />
        <p>Non</p>
      </CardInteractionButton>

      <CardInteractionButton to={goBack}>
        <img src={Back} alt="" />
        <p>Retour</p>
      </CardInteractionButton>

      <CardInteractionButton to={correctPath}>
        <img src={Check} alt="" />
        <p>Oui</p>
      </CardInteractionButton>
    </CardInteractionContainer>
  )
}

CardInteraction.propTypes = {
  incorrect: PropTypes.string,
  goBack: PropTypes.string,
  correct: PropTypes.string,
}

export default CardInteraction
