import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

export const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 0.625rem;
    color: ${Colors.LightGrey};
    max-width: 70px;
    text-align: center;
  }
`
