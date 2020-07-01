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
  color: ${Colors.Brand};
  display: flex;
  align-items: center;
`

const StepNumber = styled.span`
  position: absolute;
  left: 0;
  font-size: 4rem;
  background: linear-gradient(180deg, #48b4c7 0%, rgba(139, 7, 141, 0.62) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.35;
`

const StepImage = styled.img`
  width: 100%;
  height: 40%;
  object-fit: contain;
`

const StepContainer = styled.div``

export { StepHeader, StepNumber, StepTitle, StepImage, StepContainer }
