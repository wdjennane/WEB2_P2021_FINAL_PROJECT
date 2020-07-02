import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import Mock from "../../mock/le-phishing"

const PhishingIncorrect = () => {
  const { id: questionId } = useParams()

  const { title, help, successPath } = Mock.find((question) => {
    return question.id.toString() === questionId
  })

  return (
    <Layout title="Le hishing">
      <Card
        title={title}
        text={help}
        correctPath={`/le-phishing/question/${successPath}`}
      />
    </Layout>
  )
}

export default PhishingIncorrect
