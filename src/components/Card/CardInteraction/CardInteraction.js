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

  const incorrect = () => {
    history.push(`${incorrectPath}`)
  }

  const previous = () => {
    history.push(`${goBack}`)
  }

  const correct = () => {
    history.push(`${correctPath}`)
  }

  return (
    <CardInteractionContainer>
      <CardInteractionButton
        onClick={() => incorrect()}
        onTouchStart={() => incorrect()}
      >
        <img src={Cross} alt="" />
        <p>Non</p>
      </CardInteractionButton>

      <CardInteractionButton
        onClick={() => previous()}
        onTouchStart={() => previous()}
      >
        <img src={Back} alt="" />
        <p>Retour</p>
      </CardInteractionButton>

      <CardInteractionButton
        onClick={() => correct()}
        onTouchStart={() => correct()}
      >
        <img src={Check} alt="" />
        <p>Oui</p>
      </CardInteractionButton>
    </CardInteractionContainer>
  )
}

CardInteraction.propTypes = {
  correctPath: PropTypes.string,
  incorrectPath: PropTypes.string,
  goBack: PropTypes.string,
}

export default CardInteraction
