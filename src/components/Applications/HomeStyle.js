import styled from "styled-components"
import HomeBackground from "../../assets/images/home-background.svg"
import Colors from "../../jsStyles/Colors"

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${HomeBackground});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  h1 {
    margin: 44px 0 27px 0;
    font-size: 1.125rem;
    color: ${Colors.TextDark};
    font-weight: 600;
  }
`
