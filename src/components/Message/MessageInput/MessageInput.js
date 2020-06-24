import React from "react"
import PropTypes from "prop-types"
import camera from "./../../../assets/icons/camera.svg"
import mic from "./../../../assets/icons/mic.svg"

import {
  MessageInputContainer,
  MessageInput,
  MessageIcon,
} from "./MessageInputStyle"

const MessageBar = ({ placeholder, disabled }) => {
  return (
    <MessageInputContainer disabled={disabled}>
      <MessageIcon src={camera} />
      <MessageInput
        type="text"
        placeholder={placeholder}
        disabled
      ></MessageInput>
      <MessageIcon src={mic} />
    </MessageInputContainer>
  )
}

MessageBar.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}

export default MessageBar
