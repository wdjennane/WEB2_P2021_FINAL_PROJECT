import React from "react"
import { useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import Cross from "./../../../assets/icons/cross.svg"
import Back from "./../../../assets/icons/back.svg"
import Check from "./../../../assets/icons/check.svg"

import {
  CardInteractionContainer,
  CardInteractionButton,
} from "./CardInteractionStyle"

const CardInteraction = ({ incorrectPath, goBack, correctPath }) => {
  const history = useHistory()

  return (
    <CardInteractionContainer>
      <CardInteractionButton
        onClick={() => history.push(`${incorrectPath}`)}
        onTouchStart={() => history.push(`${incorrectPath}`)}
      >
        <img src={Cross} alt="" />
        <p>Non</p>
      </CardInteractionButton>

      <CardInteractionButton
        onClick={() => history.push(`${goBack}`)}
        onTouchStart={() => history.push(`${goBack}`)}
      >
        <img src={Back} alt="" />
        <p>Retour</p>
      </CardInteractionButton>

      <CardInteractionButton
        onClick={() => history.push(`${correctPath}`)}
        onTouchStart={() => history.push(`${correctPath}`)}
      >
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
