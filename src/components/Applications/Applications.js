import React from "react"
import ApplicationComponent from "./ApplicationComponent"
import { ApplicationContainer } from "./ApplicationStyle"
import WebDangerIcon from "../../assets/icons/web-danger.svg"

const Applications = () => {
  return (
    <ApplicationContainer>
      <ApplicationComponent
        image={WebDangerIcon}
        name={"Introduction aux Dangers du web"}
      />
      <ApplicationComponent name={"Les Traces numériques"} />
      <ApplicationComponent name={"Le phishing"} />
      <ApplicationComponent name={"Revenge porn"} />
    </ApplicationContainer>
  )
}

export default Applications
