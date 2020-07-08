import React from "react"
import PropTypes from "prop-types"
import CardInteraction from "./CardInteraction/CardInteraction"
import CardControls from "./CardControls/CardControls"
import {
  CardContainer,
  CardImg,
  CardImgAnswer,
  CardSeparator,
  CardText,
  CardTitle,
} from "./CardStyle"

const Card = ({
  isQuestion,
  title,
  image,
  text,
  correctPath,
  incorrectPath,
  nextPath,
  goBack,
}) => {
  return (
    <CardContainer isQuestion={isQuestion}>
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
          correctPath={correctPath}
          incorrectPath={incorrectPath}
          goBack={goBack}
        />
      ) : (
        <CardControls nextPath={nextPath} />
      )}
    </CardContainer>
  )
}

Card.propTypes = {
  isQuestion: PropTypes.bool,
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  goBack: PropTypes.string,
  nextPath: PropTypes.string,
  incorrectPath: PropTypes.string,
  correctPath: PropTypes.string,
}

export default Card
