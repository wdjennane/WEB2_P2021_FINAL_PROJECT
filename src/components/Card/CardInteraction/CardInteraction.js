import React from "react"
import PropTypes from "prop-types"
import Cross from "./../../../assets/icons/cross.svg"
import Back from "./../../../assets/icons/back.svg"
import Check from "./../../../assets/icons/check.svg"

import {
  CardInteractionContainer,
  CardInteractionButton,
} from "./CardInteractionStyle"

const CardInteraction = ({ incorrect, goBack, correct }) => {
  return (
    <CardInteractionContainer>
      <CardInteractionButton onClick={incorrect}>
        <img src={Cross} alt="" />
        <p>Non</p>
      </CardInteractionButton>

      <CardInteractionButton onClick={goBack}>
        <img src={Back} alt="" />
        <p>Retour</p>
      </CardInteractionButton>

      <CardInteractionButton onClick={correct}>
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
