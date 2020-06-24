import styled from "styled-components"

const MessageHeaderContainer = styled.div`
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

const MessageProfilePicture = styled.div`
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

const MessageProfileName = styled.p`
  font-size: 0.875rem;
  color: black;
`

export { MessageHeaderContainer, MessageProfilePicture, MessageProfileName }
