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

const Card = ({
  isQuestion,
  title,
  image,
  text,
  incorrectPath,
  goBack,
  correctPath,
  next,
}) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>

      {isQuestion ? <CardImg src={image} /> : <CardImgAnswer src={image} />}

      <CardSeparator />

      {isQuestion ? (
        <CardText>{text} </CardText>
      ) : (
        <CardText
          dangerouslySetInnerHTML={{ __html: text }}
          style={{ textAlign: "left" }}
        />
      )}

      {isQuestion ? (
        <CardInteraction
          incorrectPath={incorrectPath}
          goBack={goBack}
          correctPath={correctPath}
        />
      ) : (
        <CardControls nextStep={next} />
      )}
    </CardContainer>
  )
}

Card.propTypes = {
  isQuestion: PropTypes.bool,
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  incorrectPath: PropTypes.string,
  goBack: PropTypes.string,
  correctPath: PropTypes.string,
  next: PropTypes.string,
}

export default Card
