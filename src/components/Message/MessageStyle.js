import styled from "styled-components"

const MessageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const MessageFillRemainingSpace = styled.span`
  flex: 1 1 auto;
`

const MessageButtonContainer = styled.ul`
  width: 95%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export { MessageContainer, MessageFillRemainingSpace, MessageButtonContainer }
