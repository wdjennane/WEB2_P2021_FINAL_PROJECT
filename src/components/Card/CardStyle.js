import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const CardContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background: #fff;
  border-radius: 5px;
  padding: ${({ isQuestion }) => (isQuestion ? "1rem" : null)};
  box-shadow: ${({ isQuestion }) =>
    isQuestion ? "0px 4px 35px rgba(146, 146, 146, 0.25)" : null};
`

const CardImg = styled.img`
  height: 40%;
  object-fit: contain;
`

const CardImgAnswer = styled.img`
  height: 25%;
`

const CardSeparator = styled.span`
  height: 1px;
  width: calc(100% - 2rem);
  margin: 0.5rem 0;
  background-color: ${Colors.BrandLight};
`

const CardText = styled.p`
  font-weight: 600;
  text-align: center;
  margin: 0.5rem 1rem;
  font-size: 14px;

  @media (min-width: 370px) {
    font-size: 1rem;
  }

  p {
    font-weight: normal;

    &:not(:last-child) {
      margin: 0 0 1rem 0;
    }
  }

  span {
    color: ${Colors.Brand};
  }
`

const CardTitle = styled.h2`
  font-weight: 600;
  color: ${Colors.TextDark};
`

const CardModalWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const CardModalOvarlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`
const CardModalCloseButton = styled.img`
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 20px;
`

const CardModalImage = styled.img`
  max-height: 80%;
  object-fit: contain;
  z-index: 9;
  border-radius: 10px;
  backdrop-filter: brightness(0%) invert(1);
`

export {
  CardContainer,
  CardImg,
  CardImgAnswer,
  CardSeparator,
  CardText,
  CardTitle,
  CardModalWrapper,
  CardModalOvarlay,
  CardModalImage,
  CardModalCloseButton,
}
