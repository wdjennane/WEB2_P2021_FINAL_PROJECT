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
  margin: 0 0 0.5rem 0;
  font-size: 3rem;
  font-weight: 900;
  transform: translateX(-46px);
`

const DictionaryCardIcon = styled.img`
  margin-top: auto;
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
