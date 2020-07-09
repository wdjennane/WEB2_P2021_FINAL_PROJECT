import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const QuizFinishWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const QuizFinishImage = styled.img`
  width: 100%;
  height: 40%;
`

const QuizFinishTitle = styled.h2`
  font-weight: 600;
  text-align: center;
  color: ${Colors.TextDark};
  font-size: 1.25rem;
`

const QuizFinishText = styled.div`
  @media (min-width: 370px) {
    margin: 0 1rem;
  }

  p {
    &:not(:last-child) {
      margin: 0 0 0.5rem 0;
    }
  }

  span {
    color: ${Colors.Brand};
  }
`

export { QuizFinishWrapper, QuizFinishImage, QuizFinishTitle, QuizFinishText }
