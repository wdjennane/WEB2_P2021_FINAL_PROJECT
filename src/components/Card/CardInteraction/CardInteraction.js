import React from "react"
import PropTypes from "prop-types"
import cross from "./../../../assets/icons/cross.svg"
import back from "./../../../assets/icons/back.svg"
import check from "./../../../assets/icons/check.svg"

import {
  CardInteractionContainer,
  CardInteractionButton,
} from "./CardInteractionStyle"

const CardInteraction = ({ incorrect, goBack, correct }) => {
  return (
    <CardInteractionContainer>
      <CardInteractionButton onClick={incorrect}>
        <img src={cross} alt="" />
        <p>Non</p>
      </CardInteractionButton>

      <CardInteractionButton onClick={goBack}>
        <img src={back} alt="" />
        <p>Retour</p>
      </CardInteractionButton>

      <CardInteractionButton onClick={correct}>
        <img src={check} alt="" />
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
