import React from "react"
import ApplicationComponent from "./ApplicationComponent"
import { ApplicationContainer } from "./ApplicationStyle"
import WebDangerIcon from "../../assets/icons/web-danger.svg"

const Applications = () => {
  return (
    <ApplicationContainer>
      <ApplicationComponent
        image={WebDangerIcon}
        color={"#48B4C7"}
        name={"Introduction aux Dangers du web"}
      />
      <ApplicationComponent color={"#48B4C7"} name={"Les Traces numériques"} />
      <ApplicationComponent color={"#48B4C7"} name={"Le phishing"} />
      <ApplicationComponent color={"#48B4C7"} name={"Revenge porn"} />
    </ApplicationContainer>
  )
}

export default Applications
