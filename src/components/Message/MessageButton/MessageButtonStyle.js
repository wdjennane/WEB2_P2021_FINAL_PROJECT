import styled from "styled-components"
import { Link } from "react-router-dom"
import Colors from "../../../jsStyles/Colors"

const MessageChips = styled(Link)`
  width: auto;
  color: white;
  font-size: 0.875rem;
  padding: 0.5rem;
  background: ${Colors.Brand};
  border-radius: 4px;
  box-shadow: 0px 4px 35px rgba(146, 146, 146, 0.25);
`

export default MessageChips
