import styled from "styled-components"

const MessageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`

const MessageFillRemainingSpace = styled.span`
  flex: 1 1 auto;
`

const MessageButtonContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export { MessageContainer, MessageFillRemainingSpace, MessageButtonContainer }
