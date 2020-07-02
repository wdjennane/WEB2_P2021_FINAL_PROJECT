import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const DictionaryCardWrapper = styled.div`
  padding: 1rem;
  transform: translateY(-42px);

  p:not(:last-child) {
    margin: 0 0 1rem 0;
  }
`

const DictionaryCardTitle = styled.h3`
  color: ${Colors.TitleLight};
  text-align: center;
  margin: 0 0 0.5rem 0;
  font-size: 48px;
  font-weight: 900;
  transform: translateX(-46px);
`

const DictionaryCardIcon = styled.img`
  width: 36px;
  height: auto;
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
