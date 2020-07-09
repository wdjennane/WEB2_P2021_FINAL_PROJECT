import React from "react"
import Layout from "../components/Layout/Layout"
import Application from "../components/Application/Application"
import Notification from "../components/Notification/Notification"
import { HomeContainer, HomeTitle } from "../jsStyles/pages/HomeStyle"
import { ApplicationWrapper } from "../components/Application/ApplicationStyle"
import WebDangerIcon from "../assets/icons/les-dangers-du-web-iconn.svg"
import RevengePornIcon from "../assets/icons/le-revenge-porn-icon.svg"
import PhishingIcon from "../assets/icons/le-phishing-icon.svg"
import DigitalTraceIcon from "../assets/icons/les-traces-numeriques-icon.svg"

const Home = () => {
  const applications = [
    {
      url: "les-dangers-du-web",
      display: "Introduction aux Dangers du web",
      image: WebDangerIcon,
    },
    {
      url: "les-traces-numeriques",
      display: "Les Traces numériques",
      image: DigitalTraceIcon,
    },
    {
      url: "le-phishing",
      display: "Le phishing",
      image: PhishingIcon,
    },
    {
      url: "le-revenge-porn",
      display: "Revenge porn",
      image: RevengePornIcon,
    },
  ]
  return (
    <Layout>
      <HomeContainer>
        <Notification text="✉️ EXPLICATION NON LUE" path="/message" />
        <HomeTitle>Les dangers du web</HomeTitle>
        <ApplicationWrapper>
          {applications.map((application, index) => (
            <Application
              key={index}
              display={application.display}
              url={application.url}
              image={application.image}
            />
          ))}
        </ApplicationWrapper>
      </HomeContainer>
    </Layout>
  )
}

export default Home
