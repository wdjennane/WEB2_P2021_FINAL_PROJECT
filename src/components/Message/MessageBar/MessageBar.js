import React from "react"
import PropTypes from "prop-types"

import { MessageBarContainer, MessageBar } from "./MessageBarStyle"

const MessageInput = ({ text, disabled }) => {
  return (
    <MessageBarContainer disabled={disabled}>
      <MessageBar>{text}</MessageBar>
    </MessageBarContainer>
  )
}

MessageInput.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
}

export default MessageInput
