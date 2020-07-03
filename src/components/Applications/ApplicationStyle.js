import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

export const ApplicationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  flex-wrap: wrap;

  span {
    color: ${Colors.LightGrey};
    margin-bottom: 3.75rem;
  }
`

export const Application = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.Brand};
  border-radius: 5px;
  margin-bottom: 10px;
`

export const ApplicationColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
