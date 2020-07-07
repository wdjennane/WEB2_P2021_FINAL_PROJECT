import styled from "styled-components"
import Colors from "../../../jsStyles/Colors"

const CardInteractionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
`

const CardInteractionButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;

  img {
    padding: 0.75rem;
    height: 48px;
    width: 48px;
    border-radius: 24px;
    background: white;
    box-shadow: 0px 4px 35px rgba(146, 146, 146, 0.25);
    margin: 0.5rem 0;
  }

  :nth-child(1) {
    color: ${Colors.Invalid};
  }

  :nth-child(2) {
    transform: scale(1.25);
    color: ${Colors.BrandLight};
  }

  :nth-child(3) {
    color: ${Colors.Valid};
  }
`

export { CardInteractionContainer, CardInteractionButton }
