import React from "react"
import PropTypes from "prop-types"

import {
  CardContainer,
  CardImg,
  CardImgAnswer,
  CardSeparator,
  CardText,
  CardTitle,
} from "./CardStyle"

import CardInteraction from "./CardInteraction/CardInteraction"
import CardControls from "./CardControls/CardControls"

const Card = ({ question, title, path, text }) => {
  return (
    <CardContainer question={question}>
      <CardTitle>{title}</CardTitle>
      {question === true ? (
        <CardImg src={path} />
      ) : (
        // Ternary todo once the back is linked with the front
        <CardImgAnswer src="" />
      )}
      <CardSeparator />
      <CardText>{text}</CardText>

      {question === true ? (
        <CardInteraction incorrect="" goBack="" correct="" />
      ) : (
        <CardControls likes="" nextStep="" />
      )}
    </CardContainer>
  )
}

Card.propTypes = {
  question: PropTypes.bool,
  title: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
}

export default Card
