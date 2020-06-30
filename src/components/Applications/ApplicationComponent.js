import React from "react"
import { Application } from "./ApplicationStyle"
import { ApplicationContainer } from "./ApplicationComponentStyle"

const ApplicationComponent = ({ color, image, name }) => {
  return (
    <ApplicationContainer>
      <Application color={color}>
        <img src={image} alt="" />
      </Application>
      <span>{name}</span>
    </ApplicationContainer>
  )
}

export default ApplicationComponent
