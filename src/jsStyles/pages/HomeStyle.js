import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomeTitle = styled.h1`
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  text-align: center;
  color: ${Colors.TextDark};
  font-weight: 600;
`

export { HomeContainer, HomeTitle }
