import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const StepHeader = styled.h3`
  text-align: center;
  margin: 0 0 1rem;
`

const StepTitle = styled.h3`
  position: relative;
  font-weight: bold;
  padding: 0 0 0 2rem;
  margin: 0 0 1rem;
  color: ${Colors.Brand};
  display: flex;
  align-items: center;
`

const StepNumber = styled.span`
  position: absolute;
  left: 0;
  font-size: 4rem;
  color: ${Colors.TitleLight};
  opacity: 0.35;
`

const StepImage = styled.img`
  width: 90%;
  height: 40%;
  object-fit: contain;
  margin: 0.5rem auto;
`

const StepContainer = styled.div``

export { StepHeader, StepNumber, StepTitle, StepImage, StepContainer }
