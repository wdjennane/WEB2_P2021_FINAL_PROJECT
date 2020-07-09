import React, { useState } from "react"
import Layout from "../components/Layout/Layout"
import Application from "../components/Application/Application"
import Notification from "../components/Notification/Notification"
import {
  HomeContainer,
  HomeTitle,
  HomeDisclaimerButton,
  HomeDisclaimerModal,
  HomeDisclaimerModalOverlay,
  HomeDisclaimerCloseButton,
  HomeDisclaimerModalTitle,
  HomeDisclaimerModalWrapper,
} from "../jsStyles/pages/HomeStyle"
import { ApplicationWrapper } from "../components/Application/ApplicationStyle"
import WebDangerIcon from "../assets/icons/les-dangers-du-web-iconn.svg"
import RevengePornIcon from "../assets/icons/le-revenge-porn-icon.svg"
import PhishingIcon from "../assets/icons/le-phishing-icon.svg"
import DigitalTraceIcon from "../assets/icons/les-traces-numeriques-icon.svg"
import CloseIcon from "../assets/icons/close.svg"

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

  const [isOpen, setIsOpen] = useState(false)

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
        <HomeDisclaimerButton onClick={() => setIsOpen(true)}>
          Disclaimer
        </HomeDisclaimerButton>
        {isOpen && (
          <HomeDisclaimerModalWrapper>
            <HomeDisclaimerModalOverlay onClick={() => setIsOpen(false)} />
            <HomeDisclaimerModal>
              <HomeDisclaimerCloseButton
                src={CloseIcon}
                alt="close"
                onClick={() => setIsOpen(false)}
              />
              <HomeDisclaimerModalTitle>Disclaimer</HomeDisclaimerModalTitle>
              Ce site a été réalisé à des fins pédagogiques dans le cadre du
              cursus Bachelor de l’école HETIC. Les contenus présentés n'ont pas
              fait l'objet d'une demande de droit d'utilisation. Ce site ne sera
              en aucun cas exploité à des fins commerciales et ne sera pas
              publié
            </HomeDisclaimerModal>
          </HomeDisclaimerModalWrapper>
        )}
      </HomeContainer>
    </Layout>
  )
}

export default Home
