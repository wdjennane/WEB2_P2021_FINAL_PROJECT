import styled from "styled-components"
import Colors from "./../../Colors/Colors"

const MessageHeaderContainer = styled.div`
  position: sticky;
  height: 100%;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: white;
  padding: 0.5rem 1rem;
  box-shadow: 0px 4px 35px rgba(146, 146, 146, 0.25);
`

const MessageProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: ${Colors.Brand};
  border-radius: 24px;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: white;
`

const MessageProfileName = styled.p`
  font-size: 0.875rem;
  color: ${Colors.TextDark};
  font-weight: 600;
`

export { MessageHeaderContainer, MessageProfilePicture, MessageProfileName }
