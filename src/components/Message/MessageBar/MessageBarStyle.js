import styled from "styled-components"
import Colors from "./../../Colors/Colors"

const MessageBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  opacity: ${(props) => (props.disabled === false ? "1" : ".5")};
  pointer-events: ${(props) => (props.disabled === false ? null : "none")};
  position: sticky;
  bottom: 0;
  background: ${Colors.BrandLight};
  padding: 0.25rem;
`

const MessageBar = styled.input`
  width: 70%;
  outline: none;
  border: none;
  padding: 4px;
  font-size: 0.75rem;
  background: transparent;
  border: 2px solid white;
  border-radius: 10px;
  margin: 0.5rem;
  text-align: center;

  ::placeholder {
    color: ${Colors.Brand};
  }
`

const MessageIcon = styled.img`
  width: 28px;
  height: 28px;
`

export { MessageBarContainer, MessageBar, MessageIcon }
