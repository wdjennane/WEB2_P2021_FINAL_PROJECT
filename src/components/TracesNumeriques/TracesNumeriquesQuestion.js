import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import Mock from "../../mock/les-traces-numeriques"

const TracesNumeriquesQuestion = () => {
  const { id: questionId } = useParams()

  const { title, description, image, id, errorPath, successPath } = Mock.find(
    (question) => {
      return question.id.toString() === questionId
    }
  )

  const goBack = () => {
    if (id === 1) return "/les-traces-numeriques/"
    if (id <= 4) return `/les-traces-numeriques/question/${(id - 1).toString()}`
  }

  return (
    <Layout title="Les traces numériques">
      <Card
        isQuestion
        title={title}
        image={image}
        text={description}
        incorrectPath={`/les-traces-numeriques/${errorPath}`}
        goBack={goBack()}
        correctPath={`/les-traces-numeriques/question/${successPath}`}
      />
    </Layout>
  )
}

export default TracesNumeriquesQuestion
