import React from "react"
import PropTypes from "prop-types"
import Camera from "./../../../assets/icons/camera.svg"
import Mic from "./../../../assets/icons/mic.svg"

import { MessageBarContainer, MessageBar, MessageIcon } from "./MessageBarStyle"

const MessageInput = ({ placeholder, disabled }) => {
  return (
    <MessageBarContainer disabled={disabled}>
      <MessageIcon src={Camera} />
      <MessageBar type="text" placeholder={placeholder} disabled></MessageBar>
      <MessageIcon src={Mic} />
    </MessageBarContainer>
  )
}

MessageInput.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}

export default MessageInput
