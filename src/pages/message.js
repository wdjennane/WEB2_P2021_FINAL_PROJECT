import React from "react"
import {
  MessageBubble,
  MessageButton,
  MessageBar,
} from "./../components/Message/Message"
import {
  MessageContainer,
  MessageFillRemainingSpace,
  MessageButtonContainer,
} from "./../components/Message/MessageStyle"
import Layout from "../components/Layout/Layout"

const messages = [
  {
    type: "other",
    message:
      "Bienvenue sur l’app “Les dangers du web” !\n Je m’appelle Céline, je suis là pour t’informer en cas de problème durant le parcours. ",
  },
  {
    type: "other",
    message:
      "Le concept est simple 😄 :\n Tu pourras découvrir en introduction les Dangers du web de manière général puis tu vas pacourir plusieurs thèmes où tu seras confronté à des mises en situation, pour y répondre il te suffira de swiper à droite ou à gauche afin d’accèder à une information 😉️",
  },
  {
    type: "other",
    message:
      "Tu pourras aussi découvir toutes les definitions dans la rubrique Dictionnaire 😄",
  },
]

const chips = [
  {
    path: "/les-dangers-du-web",
    message: "Oui, compris",
  },
]

const Message = () => {
  return (
    <Layout title="Céline" isMessage>
      <MessageContainer>
        {messages.map((data, index) => (
          <MessageBubble key={index} type={data.type} text={data.message} />
        ))}
        <MessageFillRemainingSpace />

        <MessageButtonContainer>
          {chips.map((data, index) => (
            <MessageButton key={index} path={data.path} text={data.message} />
          ))}
          <MessageBar
            disabled={false}
            text="Appuie sur le(s) bouton(s) pour répondre"
          />
        </MessageButtonContainer>
      </MessageContainer>
    </Layout>
  )
}

export default Message
