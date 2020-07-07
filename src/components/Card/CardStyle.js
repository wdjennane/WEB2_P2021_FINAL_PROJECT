import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const CardContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: black;
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
  height: 30%;
`

const CardSeparator = styled.hr`
  border-top: 1px solid white;
  width: 95%;
  margin: 1rem 0;
`

const CardText = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 1rem;

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
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

export {
  CardContainer,
  CardImg,
  CardImgAnswer,
  CardSeparator,
  CardText,
  CardTitle,
}
