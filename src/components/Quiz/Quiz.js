import React from "react"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import Mock from "../../mock/index"

const Quiz = ({ endpoint, title }) => {
  const { id: questionId } = useParams()

  const { results } = Mock.find((mock) => mock.endpoint === endpoint)
  const data = results.find((mock) => mock.id.toString() === questionId)

  const goBack = () => {
    if (data.id === 1) return `/${endpoint}`
    return `/${endpoint}/question/${(data.id - 1).toString()}`
  }

  return (
    <Layout title={title} hasPadding>
      <Card
        isQuestion
        title={data.title}
        image={data.image}
        text={data.description}
        incorrectPath={`/${endpoint}/incorrect/${data.id}`}
        goBack={goBack()}
        correctPath={`/${endpoint}/correct/${data.id}`}
      />
    </Layout>
  )
}

Quiz.propTypes = {
  endpoint: PropTypes.string,
  title: PropTypes.string,
}

export default Quiz
