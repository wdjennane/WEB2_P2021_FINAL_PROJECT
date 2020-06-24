import React from "react"
import PropTypes from "prop-types"
import MessageChips from "./MessageButtonStyle"

const MessageButton = ({ path, text, onClick }) => {
  return (
    <MessageChips to={path} onClick={onClick}>
      {text}
    </MessageChips>
  )
}

MessageButton.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.any,
}

export default MessageButton
