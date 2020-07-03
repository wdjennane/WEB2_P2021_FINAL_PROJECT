import styled from "styled-components"
import Colors from "../../../jsStyles/Colors"

const MessageWrapper = styled.div`
  background: ${(props) =>
    props.type === "user" ? Colors.Brand : Colors.Message};
  margin: 0.5rem 1rem;
  padding: 1rem;
  border-radius: ${(props) =>
    props.type === "user" ? "10px 10px 0px 10px" : "10px 10px 10px 0px"};
  color: ${(props) => (props.type === "user" ? "black" : Colors.Brand)};
  align-self: ${(props) => (props.type === "user" ? "flex-end" : "flex-start")};
  font-size: 1rem;
  max-width: 70%;
  white-space: pre-line;
`

export default MessageWrapper
