import styled from "styled-components"
import Colors from "../../../jsStyles/Colors"

const MessageWrapper = styled.div`
  background: ${(props) =>
    props.type === "user" ? Colors.Brand : Colors.Message};
  padding: 1rem;
  border-radius: ${(props) =>
    props.type === "user" ? "10px 10px 0px 10px" : "10px 10px 10px 0px"};
  color: ${(props) => (props.type === "user" ? "black" : Colors.Brand)};
  align-self: ${(props) => (props.type === "user" ? "flex-end" : "flex-start")};
  font-size: 1rem;
  max-width: 80%;
  white-space: pre-line;
  margin: 0 0 1rem 0;
`

export default MessageWrapper
