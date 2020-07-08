import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const CardContainer = styled.div`
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

export {
  CardContainer,
  CardImg,
  CardImgAnswer,
  CardSeparator,
  CardText,
  CardTitle,
}
