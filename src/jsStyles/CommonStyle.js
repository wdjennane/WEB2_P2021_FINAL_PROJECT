import styled from "styled-components"
import { Link } from "react-router-dom"
import Colors from "../jsStyles/Colors"

const Text = styled.p`
  span {
    color: ${Colors.Brand};
  }
`

const Button = styled(Link)`
  display: block;
  border-radius: 5px;
  text-align: center;
  color: white;
  width: 90%;
  margin: auto;
  padding: 0.25rem;
  background-color: ${Colors.Brand};
`

const Section = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export { Text, Section, Button }
