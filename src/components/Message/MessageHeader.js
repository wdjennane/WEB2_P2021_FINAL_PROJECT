import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #3faabc;
  padding: 0.5rem 1rem;
`

const ProfilePicture = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 24px;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
`

const ProfileName = styled.p`
  font-size: 0.875rem;
  color: black;
`

const MessageHeader = (props) => {
  const { contactName } = props
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
