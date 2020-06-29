import styled from "styled-components"

const CardInteractionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
`

const CardInteractionButton = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding: 0.75rem;
    height: 48px;
    width: 48px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.3);
    margin: 0.5rem 0;
  }

  :nth-child(2) {
    transform: scale(1.25);
  }
`

export { CardInteractionContainer, CardInteractionButton }
