import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const DictionaryCardWrapper = styled.div`
  padding: 0 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: auto;
  }
`

const DictionaryCardTitle = styled.h3`
  color: ${Colors.TitleLight};
  text-align: center;
  margin: 1rem 0;
  font-size: 3rem;
  font-weight: 900;
  transform: translateX(-46px);
`

const DictionaryCardIcon = styled.img`
  width: 25px;
  margin-top: auto;
  animation: scroll-down 1s ease-in-out 0.3s infinite;

  @keyframes scroll-down {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`

const DictionaryTitleWrapper = styled.span`
  display: flex;
  flex-direction: column;

  svg {
    transform: translateX(165px) translateY(10px);
  }
`

export {
  DictionaryCardWrapper,
  DictionaryCardTitle,
  DictionaryCardIcon,
  DictionaryTitleWrapper,
}
