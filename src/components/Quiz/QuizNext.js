import React from "react"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import Mock from "../../mock/index"
import CorrectAnswer from "../../assets/icons/correct-answer.svg"
import IncorrectAnswer from "../../assets/icons/incorrect-answer.svg"

const QuizNext = ({ endpoint, title, isCorrect }) => {
  const { id: questionId } = useParams()

  const { results } = Mock.find((mock) => mock.endpoint === endpoint)
  const data = results.find((mock) => mock.id.toString() === questionId)

  const next = () => {
    if (Number(questionId) === results.length) {
      return `/${endpoint}/finish`
    }
    return `/${endpoint}/question/${(data.id + 1).toString()}`
  }

  return (
    <Layout title={title} hasPadding>
      <Card
        title={data.title}
        image={
          isCorrect
            ? data.correctAnswer
              ? CorrectAnswer
              : IncorrectAnswer
            : !data.correctAnswer
            ? CorrectAnswer
            : IncorrectAnswer
        }
        text={isCorrect ? data.sucessHelp : data.errorHelp}
        next={next()}
      />
    </Layout>
  )
}

QuizNext.propTypes = {
  endpoint: PropTypes.string,
  title: PropTypes.string,
  isCorrect: PropTypes.bool,
}

export default QuizNext
