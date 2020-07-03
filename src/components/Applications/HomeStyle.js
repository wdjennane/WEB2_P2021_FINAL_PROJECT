import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 0 40px 0;
    font-size: 25px;
    color: ${Colors.DarkBlue};
    font-weight: 600;
  }
`
