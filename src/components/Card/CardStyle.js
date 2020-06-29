import styled from "styled-components"
import Colors from "./../Colors/Colors.js"

const CardContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  height: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  background: ${Colors.OpaqueWhite};
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

export { CardContainer, CardImg, CardSeparator, CardText, CardTitle }
