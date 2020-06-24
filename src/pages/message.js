import React from "react"
import styled from "styled-components"
import {
  MessageBubble,
  MessageButton,
  MessageHeader,
  MessageInput,
} from "./../components/Message/Message"

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const FillRemainingSpace = styled.span`
  flex: 1 1 auto;
`

const ChipsContainer = styled.ul`
  width: 95%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

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
    path: "/dangers-du-web",
    message: "Okay, compris !",
  },
]

const Message = () => {
  return (
    <Container>
      <MessageHeader contactName="Céline" />
      {messages.map((data, i) => {
        return (
          <MessageBubble
            key={i}
            type={data.type}
            text={data.message}
          ></MessageBubble>
        )
      })}
      <FillRemainingSpace></FillRemainingSpace>

      <ChipsContainer>
        {chips.map((data, i) => {
          return (
            <MessageButton
              key={i}
              path={data.path}
              text={data.message}
            ></MessageButton>
          )
        })}
      </ChipsContainer>
      <MessageInput
        disabled={false}
        placeholder="Appuies sur les boutons pour répondre"
      ></MessageInput>
    </Container>
  )
}

export default Message
