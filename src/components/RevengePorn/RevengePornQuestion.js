import React from "react"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import Mock from "../../mock/le-revenge-porn"

const RevengePornQuestion = () => {
  const { id: questionId } = useParams()

  const { title, description, image, id, errorPath, successPath } = Mock.find(
    (question) => {
      return question.id.toString() === questionId
    }
  )

  const goBack = () => {
    if (id === 1) return "/le-revenge-porn/"
    if (id <= 4) return `/le-revenge-porn/question/${(id - 1).toString()}`
  }

  return (
    <Layout title="Le revenge porn">
      <Card
        isQuestion
        title={title}
        image={image}
        text={description}
        incorrectPath={`/le-revenge-porn/${errorPath}`}
        goBack={goBack()}
        correctPath={`/le-revenge-porn/question/${successPath}`}
      />
    </Layout>
  )
}

export default RevengePornQuestion
