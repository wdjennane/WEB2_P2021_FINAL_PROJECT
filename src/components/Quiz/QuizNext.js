import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import CorrectAnswer from "../../assets/icons/correct-answer.svg"
import IncorrectAnswer from "../../assets/icons/incorrect-answer.svg"

const QuizNext = ({
  url,
  endpoint,
  title,
  isCorrect,
  progressWidth,
  setProgressWidth,
}) => {
  const { id: questionId } = useParams()
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://hetic.zinutti.fr/api/question/${endpoint}`,
    }).then(({ data }) => {
      setQuestions(data)
      setProgressWidth((questionId / (data.length + 1)) * 100)
    })
  }, [endpoint, questionId, setProgressWidth])

  const question =
    questions.length &&
    questions.find((question, index) => {
      return index + 1 === Number(questionId)
    })

  const next = () => {
    if (Number(questionId) === questions.length) return `${url}/finish`
    return `${url}/question/${Number(questionId) + 1}`
  }

  return (
    <Layout title={title} progressWidth={progressWidth} hasPadding>
      <Card
        title={question.title}
        image={
          isCorrect
            ? Number(question.answer)
              ? CorrectAnswer
              : IncorrectAnswer
            : Number(question.answer)
            ? IncorrectAnswer
            : CorrectAnswer
        }
        text={question.answerText}
        nextPath={next()}
      />
    </Layout>
  )
}

QuizNext.propTypes = {
  url: PropTypes.string,
  endpoint: PropTypes.string,
  title: PropTypes.string,
  isCorrect: PropTypes.bool,
  progressWidth: PropTypes.number,
  setProgressWidth: PropTypes.func,
}

export default QuizNext
