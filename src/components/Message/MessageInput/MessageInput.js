import React from "react"
import PropTypes from "prop-types"
import camera from "./../../../assets/icons/camera.svg"
import mic from "./../../../assets/icons/mic.svg"

import { Container, Input, Icon } from "./MessageInputStyle"

const MessageInput = ({ placeholder, disabled }) => {
  return (
    <Container disabled={disabled}>
      <Icon src={camera}></Icon>
      <Input type="text" placeholder={placeholder} disabled></Input>
      <Icon src={mic}></Icon>
    </Container>
  )
}

MessageInput.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
}

export default MessageInput
