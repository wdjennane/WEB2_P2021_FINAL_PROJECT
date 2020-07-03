import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

export const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: ${Colors.LightGrey};
    max-width: 120px;
    text-align: center;
  }
`
