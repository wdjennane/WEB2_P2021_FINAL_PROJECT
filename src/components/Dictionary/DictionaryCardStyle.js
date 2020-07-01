import styled from "styled-components"
import Colors from "../../assets/jsStyles/Colors"

const DictionaryCardWrapper = styled.div`
  padding: 1rem;
  box-shadow: 0 4px 35px rgba(146, 146, 146, 0.25);

  p:not(:last-child) {
    margin: 0 0 1rem 0;
  }
`

const DictionaryCardTitle = styled.h3`
  color: ${Colors.Brand};
  text-align: center;
  margin: 0 0 0.5rem 0;
`

export { DictionaryCardWrapper, DictionaryCardTitle }
