import styled from "styled-components"

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const FillRemainingSpace = styled.span`
  flex: 1 1 auto;
`

const ButtonContainer = styled.ul`
  width: 95%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export { Container, FillRemainingSpace, ButtonContainer }
