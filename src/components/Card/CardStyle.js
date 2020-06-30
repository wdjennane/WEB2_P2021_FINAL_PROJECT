import styled from "styled-components"

const CardContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: black;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 35px rgba(146, 146, 146, 0.25);
`

const CardImg = styled.img`
  width: 100%;
  height: auto;
`

const CardImgAnswer = styled.img`
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

export {
  CardContainer,
  CardImg,
  CardImgAnswer,
  CardSeparator,
  CardText,
  CardTitle,
}
