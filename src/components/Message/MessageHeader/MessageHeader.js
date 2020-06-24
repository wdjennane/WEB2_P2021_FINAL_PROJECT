import React from "react"
import PropTypes from "prop-types"
import {
  MessageHeaderContainer,
  MessageProfilePicture,
  MessageProfileName,
} from "./MessageHeaderStyle"

const MessageHeader = ({ contactName }) => {
  return (
    <MessageHeaderContainer>
      <MessageProfilePicture>{contactName.charAt(0)}</MessageProfilePicture>
      <MessageProfileName>{contactName}</MessageProfileName>
    </MessageHeaderContainer>
  )
}

MessageHeader.propTypes = {
  contactName: PropTypes.string,
}

export default MessageHeader
