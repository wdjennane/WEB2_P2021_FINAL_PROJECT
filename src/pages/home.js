import React from "react"
import Layout from "../components/Layout/Layout"
import Application from "../components/Application/Application"
import Notification from "../components/Notification/Notification"
import { HomeContainer, HomeTitle } from "../jsStyles/pages/HomeStyle"
import { ApplicationWrapper } from "../components/Application/ApplicationStyle"
import WebDangerIcon from "../assets/icons/web-danger.svg"
import RevengePornIcon from "../assets/icons/le-revenge-porn.svg"
import PhishingIcon from "../assets/icons/phishing-icon.svg"
import DigitalTraceIcon from "../assets/icons/les-traces-numeriques.svg"

const Home = () => {
  const applications = [
    {
      url: "les-dangers-du-web",
      display: "Introduction aux Dangers du web",
      image: WebDangerIcon,
    },
    {
      url: "le-phishing",
      display: "Le phishing",
      image: RevengePornIcon,
    },
    {
      url: "les-traces-numeriques",
      display: "Les Traces numériques",
      image: PhishingIcon,
    },
    {
      url: "le-revenge-porn",
      display: "Revenge porn",
      image: DigitalTraceIcon,
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
