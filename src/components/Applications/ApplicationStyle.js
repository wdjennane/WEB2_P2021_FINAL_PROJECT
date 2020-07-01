import styled from "styled-components"
import Colors from "../../assets/jsStyles/Colors"

export const ApplicationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;

  span {
    font-size: 10px;
    color: ${Colors.LightGrey};
  }
`

export const Application = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.Brand};
  border-radius: 5px;
  margin-bottom: 10px;
`
