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
  padding: 0.5rem;
  font-family: "Mont", sans-serif;
  color: ${Colors.DarkGrey};
  font-weight: 600;
  font-size: 14px;
  margin: 1rem 0 0;
  text-align: center;
`

export { MessageBarContainer, MessageBar }
