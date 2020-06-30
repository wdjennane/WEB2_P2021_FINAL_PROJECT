import styled from "styled-components"
import Colors from "./../../Colors/Colors"

const MessageBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.disabled === false ? "1" : ".5")};
  pointer-events: ${(props) => (props.disabled === false ? null : "none")};
  position: sticky;
  bottom: 0;
  background: #c9e8ed;
  padding: 0.25rem;
`

const MessageBar = styled.input`
  width: 75%;
  outline: none;
  border: none;
  padding: 4px;
  font-size: 11px;
  background: transparent;
  /* border: 2px solid ${Colors.Brand}; */
  /* border-radius: 5px; */
  margin: 0.5rem;
  text-align: center;

  ::placeholder {
    font-family: "Mont", sans-serif;
    color: ${Colors.Brand};
    font-weight: 600;
  }
`

const MessageIcon = styled.img`
  width: 22px;
  height: auto;
`

export { MessageBarContainer, MessageBar, MessageIcon }
