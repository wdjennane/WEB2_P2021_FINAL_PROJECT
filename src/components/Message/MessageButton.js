import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Chips = styled(Link)`
  width: auto;
  color: #777777;
  font-size: 0.875rem;
  margin: 0.5rem;
  padding: 0.25rem 1rem;
  border-radius: 4px;
  border: 1px solid #3faabc;
  text-decoration: none;
`

const MessageButton = (props) => {
  const { path, text, onClick } = props

  return (
    <Chips to={path} onClick={onClick}>
      {text}
    </Chips>
  )
}

MessageButton.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.any,
}

export default MessageButton
