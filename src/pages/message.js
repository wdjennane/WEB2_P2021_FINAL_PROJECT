import React from "react"
import {
  MessageBubble,
  MessageButton,
  MessageHeader,
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
      "Bienvenue à “...” ! Je m’appelle Céline, je suis là pour t’informer en cas de problème durant le parcours.",
  },
  {
    type: "other",
    message:
      "Bien, le concept de l’application est simple : Tu vas pacourir plusieurs thème qu’il te faudra débloquer pour t”informer sur les dangers du web",
  },
]

const chips = [
  {
    path: "/les-dangers-du-web",
    message: "Okay, compris !",
  },
]

const Message = () => {
  return (
    <Layout>
      <MessageContainer>
        <MessageHeader contactName="Céline" />
        {messages.map((data, index) => (
          <MessageBubble key={index} type={data.type} text={data.message} />
        ))}
        <MessageFillRemainingSpace />

        <MessageButtonContainer>
          {chips.map((data, index) => (
            <MessageButton key={index} path={data.path} text={data.message} />
          ))}
        </MessageButtonContainer>
        <MessageBar
          disabled={false}
          placeholder="Appuies sur les boutons pour répondre"
        />
      </MessageContainer>
    </Layout>
  )
}

export default Message
