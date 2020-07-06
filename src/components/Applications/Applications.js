import React from "react"
import { Link } from "react-router-dom"
import ApplicationComponent from "./ApplicationComponent"
import { ApplicationContainer, ApplicationColumn } from "./ApplicationStyle"
import WebDangerIcon from "../../assets/icons/web-danger.svg"
import RevengePornIcon from "../../assets/icons/le-revenge-porn.svg"
import PhishingIcon from "../../assets/icons/phishing-icon.svg"
import DigitalTraceIcon from "../../assets/icons/les-traces-numeriques.svg"

const Applications = () => {
  return (
    <ApplicationContainer>
      <ApplicationColumn>
        <Link to="/les-dangers-du-web">
          <ApplicationComponent
            image={WebDangerIcon}
            name={"Introduction aux Dangers du web"}
          />
        </Link>
        <Link to="/le-phishing">
          <ApplicationComponent image={PhishingIcon} name={"Le phishing"} />
        </Link>
      </ApplicationColumn>
      <ApplicationColumn>
        <Link to="/les-traces-numeriques">
          <ApplicationComponent
            image={DigitalTraceIcon}
            name={"Les Traces numériques"}
          />
        </Link>
        <Link to="/le-revenge-porn">
          <ApplicationComponent image={RevengePornIcon} name={"Revenge porn"} />
        </Link>
      </ApplicationColumn>
    </ApplicationContainer>
  )
}

export default Applications
