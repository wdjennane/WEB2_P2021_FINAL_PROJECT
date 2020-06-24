import React from "react"
import PropTypes from "prop-types"
import camera from "./../../../assets/icons/camera.svg"
import mic from "./../../../assets/icons/mic.svg"

import { MessageBarContainer, MessageBar, MessageIcon } from "./MessageBarStyle"

const MessageInput = ({ placeholder, disabled }) => {
  return (
    <MessageBarContainer disabled={disabled}>
      <MessageIcon src={camera} />
      <MessageBar type="text" placeholder={placeholder} disabled></MessageBar>
      <MessageIcon src={mic} />
    </MessageBarContainer>
  )
}

MessageInput.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}

export default MessageInput
