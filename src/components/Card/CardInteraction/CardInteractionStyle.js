import styled from "styled-components"
import Colors from "../../../jsStyles/Colors"

const CardInteractionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  font-weight: 600;
  height: auto !important;
  font-size: 14px;
`

const CardInteractionButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;

  img {
    padding: 0.75rem;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    box-shadow: 0px 5px 40px rgba(146, 146, 146, 0.5);
    margin: 0 0 0.5rem 0;
  }

  :nth-child(1) {
    color: ${Colors.Invalid};
  }

  :nth-child(2) {
    color: ${Colors.Brand};
  }

  :nth-child(3) {
    color: ${Colors.Valid};
  }
`

export { CardInteractionContainer, CardInteractionButton }
