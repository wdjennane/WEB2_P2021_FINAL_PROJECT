import styled from "styled-components"

const CardControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
`

const CardControlsButton = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;

  img {
    margin: 0.5rem 0;
  }
`

export { CardControlsContainer, CardControlsButton }
