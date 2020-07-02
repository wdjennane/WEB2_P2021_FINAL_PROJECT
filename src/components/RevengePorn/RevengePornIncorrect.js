import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import Mock from "../../mock/le-revenge-porn"

const RevengePornIncorrect = () => {
  const { id: questionId } = useParams()

  const { title, help, successPath } = Mock.find((question) => {
    return question.id.toString() === questionId
  })

  return (
    <Layout title="Le revenge porn">
      <Card
        title={title}
        text={help}
        correctPath={`/le-revenge-porn/question/${successPath}`}
      />
    </Layout>
  )
}

export default RevengePornIncorrect
