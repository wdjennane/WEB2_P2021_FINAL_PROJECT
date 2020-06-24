import React from "react"
import PropTypes from "prop-types"
import Chips from "./MessageButtonStyle"

const MessageButton = ({ path, text, onClick }) => {
  return (
    <Chips to={path} onClick={onClick}>
      {text}
    </Chips>
  )
}

MessageButton.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.any,
}

export default MessageButton
