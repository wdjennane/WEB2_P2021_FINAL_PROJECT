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
}) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>

      {isQuestion && <CardImg src={image} alt="card" />}

      {/* {isQuestion ? (
        <CardImg src={image} />
      ) : (
        // Ternary todo once the back is linked with the front
        <CardImgAnswer src="" />
      )} */}

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
        <CardControls nextStep={correctPath} />
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
}

export default Card
