import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import Mock from "../../mock/le-phishing"

const PhishingQuestion = () => {
  const { id: questionId } = useParams()

  const { title, description, image, id, errorPath, successPath } = Mock.find(
    (question) => {
      return question.id.toString() === questionId
    }
  )

  const goBack = () => {
    if (id === 1) return "/le-phishing/"
    if (id <= 4) return `/le-phishing/question/${(id - 1).toString()}`
  }

  return (
    <Layout title="Le phishing">
      <Card
        isQuestion
        title={title}
        image={image}
        text={description}
        incorrectPath={`/le-phishing/${errorPath}`}
        goBack={goBack()}
        correctPath={`/le-phishing/question/${successPath}`}
      />
    </Layout>
  )
}

export default PhishingQuestion
