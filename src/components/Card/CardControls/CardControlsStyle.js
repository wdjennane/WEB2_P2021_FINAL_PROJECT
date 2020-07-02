import { Link } from "react-router-dom"
import styled from "styled-components"

const CardControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
`

const CardControlsButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;

  img {
    margin: 0.5rem 0;
  }
`

export { CardControlsContainer, CardControlsButton }
