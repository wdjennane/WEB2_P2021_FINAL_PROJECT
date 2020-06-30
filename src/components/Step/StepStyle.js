import styled from "styled-components"
import Colors from "../Colors/Colors"

const StepHeader = styled.h3`
  text-align: center;
  margin: 0 0 1rem;
`

const StepTitle = styled.h3`
  position: relative;
  font-weight: bold;
  padding: 0 0 0 2rem;
  margin: 0 0 1rem;
  color: ${Colors.Darkgrey};
`

const StepNumber = styled.span`
  position: absolute;
  left: 0;
  font-size: 2rem;
  transform: rotate(-90deg);
  color: ${Colors.Brand};
`

const StepImage = styled.img`
  width: 100%;
  height: 40%;
  object-fit: contain;
`

const StepContainer = styled.div``

export { StepHeader, StepNumber, StepTitle, StepImage, StepContainer }
