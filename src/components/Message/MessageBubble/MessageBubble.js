import React from "react"
import PropTypes from "prop-types"
import MessageWrapper from "./MessageBubbleStyle"

const MessageBubble = ({ text, type }) => {
  return <MessageWrapper type={type}>{text}</MessageWrapper>
}

MessageBubble.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}

export default MessageBubble
