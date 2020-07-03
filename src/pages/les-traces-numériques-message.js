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
      "Besoin d’un petit rappel?\nTu vas faire ton premier parcours intéractif, les règles sont très simples :\nTu vas être confronté à des mises en situation sur les 3 parcours. Il te suffira de swiper à droite ou à gauche en fonction de ta réponse 🙂\nN’hésites pas à aller dans la rubrique Dictionnaire 📚 pour retrouver les def et des info en +",
  },
]

const chips = [
  {
    // Game route to add
    message: "Oui, compris",
  },
]

const Message = () => {
  return (
    <Layout title="Céline">
      <MessageContainer>
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
