import styled from "styled-components"
import Colors from "../../../assets/jsStyles/Colors"

export const HeaderContainer = styled.div`
  height: 37px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      margin-right: 6px;
    }
    span {
      font-size: 0.625rem;
      font-weight: 600;
      font-size: 10px;
      color: ${Colors.DarkBlue};
    }
  }

  span {
    font-size: 0.625rem;
    font-weight: normal;
  }
`
