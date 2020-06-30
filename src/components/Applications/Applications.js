import React from "react"
import { Link } from "react-router-dom"
import ApplicationComponent from "./ApplicationComponent"
import { ApplicationContainer } from "./ApplicationStyle"
import WebDangerIcon from "../../assets/icons/web-danger.svg"

const Applications = () => {
  return (
    <ApplicationContainer>
      <Link to="/les-dangers-du-web">
        <ApplicationComponent
          image={WebDangerIcon}
          name={"Introduction aux Dangers du web"}
        />
      </Link>
      <Link to="/les-traces-numeriques">
        <ApplicationComponent name={"Les Traces numériques"} />
      </Link>
      <Link to="/le-phishing">
        <ApplicationComponent name={"Le phishing"} />
      </Link>
      <Link to="/le-revenge-porn">
        <ApplicationComponent name={"Revenge porn"} />
      </Link>
    </ApplicationContainer>
  )
}

export default Applications
