import styled from "styled-components"

const CardContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  height: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
`

const CardImg = styled.img`
  width: 100%;
  height: auto;
`

const CardSeparator = styled.hr`
  border-top: 1px solid white;
  width: 95%;
  margin: 1rem 0;
`

const CardText = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 0.5rem;
`

const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const CardInteraction = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  font-size: 12px;
  font-weight: 600;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;

    :nth-child(2) {
      transform: scale(1.25);
    }

    img {
      padding: 0.75rem;
      height: 48px;
      width: 48px;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.3);
      margin: 0.5rem 0;
    }
  }
`

const CardControls = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  align-items: center;
  font-size: 12px;
  font-weight: 600;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;

    img {
      padding: 0.75rem;
      height: 48px;
      width: 48px;
      border-radius: 24px;
      margin: 0.5rem 0;
    }
  }
`

export {
  CardContainer,
  CardImg,
  CardSeparator,
  CardText,
  CardTitle,
  CardInteraction,
  CardControls,
}