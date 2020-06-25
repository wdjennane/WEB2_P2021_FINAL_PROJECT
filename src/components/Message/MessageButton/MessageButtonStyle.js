import styled from "styled-components"
import { Link } from "react-router-dom"
import Colors from "./../../Colors/Colors"

const MessageChips = styled(Link)`
  width: auto;
  color: #777777;
  font-size: 0.875rem;
  margin: 0.5rem;
  padding: 0.25rem 1rem;
  border-radius: 4px;
  border: 1px solid ${Colors.Brand};
  text-decoration: none;
`

export default MessageChips
