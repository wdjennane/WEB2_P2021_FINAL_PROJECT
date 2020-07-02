import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import Mock from "../../mock/les-traces-numeriques"

const TracesNumeriquesIncorrect = () => {
  const { id: questionId } = useParams()

  const { title, help, successPath } = Mock.find((question) => {
    return question.id.toString() === questionId
  })

  return (
    <Layout title="Les traces numériques">
      <Card
        title={title}
        text={help}
        correctPath={`/les-traces-numeriques/question/${successPath}`}
      />
    </Layout>
  )
}

export default TracesNumeriquesIncorrect
