import { Link } from "react-router-dom"
import styled from "styled-components"
import Colors from "../../../jsStyles/Colors"

const CardControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  font-weight: 600;
  padding: 0 1rem;
  font-size: 14px;
`

const CardControlsButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.Brand};

  img {
    margin: 0 0 0.5rem 0;
    height: 20px;
    width: 20px;
  }
`

export { CardControlsContainer, CardControlsButton }
