import React from "react"
import PropTypes from "prop-types"

import {
  CardContainer,
  CardImg,
  CardSeparator,
  CardText,
  CardTitle,
  CardInteraction,
  CardControls,
} from "./CardStyle"

import cross from "./../../assets/icons/cross.svg"
import back from "./../../assets/icons/back.svg"
import check from "./../../assets/icons/check.svg"
import hearth from "./../../assets/icons/hearth.svg"
import next from "./../../assets/icons/next.svg"

const Card = ({ selection, title, path, text }) => {
  return (
    <CardContainer selection={selection}>
      <CardTitle>{title}</CardTitle>
      <CardImg src={path} />
      <CardSeparator />
      <CardText>{text}</CardText>

      {selection === true ? (
        <CardInteraction>
          <span>
            <img src={cross} alt="" />
            <p>Non</p>
          </span>

          <span>
            <img src={back} alt="" />
            <p>Retour</p>
          </span>

          <span>
            <img src={check} alt="" />
            <p>Oui</p>
          </span>
        </CardInteraction>
      ) : (
        <CardControls>
          <span>
            <img src={hearth} alt="" />
            <p>Likes</p>
          </span>

          <span>
            <img src={next} alt="" />
            <p>Suite</p>
          </span>
        </CardControls>
      )}
    </CardContainer>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  selection: PropTypes.bool,
}

export default Card
