import React from "react"
import PropTypes from "prop-types"
import { Container, ProfilePicture, ProfileName } from "./MessageHeaderStyle"

const MessageHeader = ({ contactName }) => {
  return (
    <Container>
      <ProfilePicture>{contactName.charAt(0)}</ProfilePicture>
      <ProfileName>{contactName}</ProfileName>
    </Container>
  )
}

MessageHeader.propTypes = {
  contactName: PropTypes.string,
}

export default MessageHeader
