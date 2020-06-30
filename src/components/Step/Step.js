import React from "react"
import PropsTypes from "prop-types"
import {
  StepContainer,
  StepHeader,
  StepTitle,
  StepNumber,
  StepImage,
} from "./StepStyle"

const Layout = ({ children, headerTitle, stepNumber, title, image }) => {
  return (
    <>
      <StepHeader>{headerTitle}</StepHeader>
      <StepTitle>
        <StepNumber>{stepNumber}</StepNumber>
        {title}
      </StepTitle>
      <StepImage src={image} alt="step" />
      <StepContainer>{children}</StepContainer>
    </>
  )
}

Layout.propsTypes = {
  children: PropsTypes.node,
  headerTitle: PropsTypes.string,
  title: PropsTypes.string,
  stepNumber: PropsTypes.string,
  image: PropsTypes.string,
}

export default Layout
