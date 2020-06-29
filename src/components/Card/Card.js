import React from "react"
import PropTypes from "prop-types"

import {
  CardContainer,
  CardImg,
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
      <CardImg src={path} />
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
  title: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  question: PropTypes.bool,
}

export default Card
