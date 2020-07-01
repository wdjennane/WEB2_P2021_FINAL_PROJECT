import styled from "styled-components"
import { Link } from "react-router-dom"
import Colors from "../../../assets/jsStyles/Colors"

const MessageChips = styled(Link)`
  width: auto;
  color: white;
  font-size: 0.875rem;
  margin: 0.5rem 1rem;
  padding: 0.5rem;
  background: ${Colors.Brand};
  color: white;
  border-radius: 4px;
  box-shadow: 0px 4px 35px rgba(146, 146, 146, 0.25);
  text-decoration: none;
`

export default MessageChips
