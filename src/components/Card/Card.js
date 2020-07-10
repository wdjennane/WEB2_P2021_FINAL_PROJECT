import React, { useState } from "react"
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
  CardModalWrapper,
  CardModalImage,
  CardModalOvarlay,
  CardModalCloseButton,
} from "./CardStyle"
import CloseIcon from "../../assets/icons/close.svg"

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
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <CardContainer isQuestion={isQuestion}>
      <CardTitle>{title}</CardTitle>

      {isQuestion ? (
        <CardImg
          src={image}
          alt=""
          onClick={() => setIsZoomed(true)}
          onTouchStart={() => setIsZoomed(true)}
        />
      ) : (
        <CardImgAnswer src={image} alt="" />
      )}

      {isQuestion && isZoomed && (
        <CardModalWrapper>
          <CardModalOvarlay
            onClick={() => setIsZoomed(false)}
            onTouchStart={() => setIsZoomed(false)}
          />
          <CardModalCloseButton
            src={CloseIcon}
            alt=""
            onClick={() => setIsZoomed(false)}
            onTouchStart={() => setIsZoomed(false)}
          />
          <CardModalImage src={image} alt="" />
        </CardModalWrapper>
      )}

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
