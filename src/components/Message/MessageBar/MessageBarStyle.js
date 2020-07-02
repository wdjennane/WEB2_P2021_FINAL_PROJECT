import styled from "styled-components"
import Colors from "../../../jsStyles/Colors"

const MessageBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.disabled === false ? "1" : ".5")};
  pointer-events: ${(props) => (props.disabled === false ? null : "none")};
`

const MessageBar = styled.p`
  padding: 4px;
  font-family: "Mont", sans-serif;
  color: ${Colors.DarkGrey};
  font-weight: 600;
  font-size: 14px;
  margin: 0.5rem;
  text-align: center;
`

export { MessageBarContainer, MessageBar }
