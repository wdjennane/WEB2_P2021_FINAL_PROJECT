import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const MessageWrapper = styled.div`
  background: ${(props) => (props.type === "user" ? "#ecf0f1" : "#3FAABC")};
  margin: 0.5rem 1rem;
  padding: 1rem;
  border-radius: ${(props) =>
    props.type === "user" ? "10px 10px 0px 10px" : "10px 10px 10px 0px"};
  color: ${(props) => (props.type === "user" ? "black" : "white")};
  align-self: ${(props) => (props.type === "user" ? "flex-end" : "flex-start")};
  font-size: 1rem;
  max-width: 70%;
`

const MessageBubble = (props) => {
  const { text, type } = props
  return <MessageWrapper type={type}>{text}</MessageWrapper>
}

MessageBubble.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
}

export default MessageBubble
