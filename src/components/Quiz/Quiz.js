import axios from "axios"
import React, { useEffect, useState } from "react"
import TinderCard from "react-tinder-card"
import { useParams, useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"

const Quiz = ({ url, endpoint, title }) => {
  const history = useHistory()
  const { id: questionId } = useParams()
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://hetic.zinutti.fr/api/question/${endpoint}`,
    }).then(({ data }) => setQuestions(data))
  }, [endpoint, questionId])

  const currentQuestionId =
    questions.findIndex((question, index) => {
      return index + 1 === Number(questionId)
    }) + 1

  const question =
    questions.length &&
    questions.find(() => {
      return currentQuestionId === Number(questionId)
    })

  const goBack = () => {
    if (currentQuestionId === 1) return `/${url}`
    return `/${url}/question/${currentQuestionId - 1}`
  }

  const onSwipe = (direction) => {
    if (direction === "right") {
      history.push(`/${endpoint}/correct/${currentQuestionId}`)
    }

    if (direction === "left") {
      history.push(`/${endpoint}/incorrect/${currentQuestionId}`)
    }
  }

  return (
    <Layout title={title} hasPadding isCard>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => null}
        preventSwipe={["up", "down"]}
      >
        <Card
          isQuestion
          title={question.title}
          image={`/images/${endpoint}-${currentQuestionId}.jpg`}
          text={question.question}
          incorrectPath={`/${url}/incorrect/${currentQuestionId}`}
          correctPath={`/${url}/correct/${currentQuestionId}`}
          goBack={goBack()}
        />
      </TinderCard>
    </Layout>
  )
}

Quiz.propTypes = {
  url: PropTypes.string,
  endpoint: PropTypes.string,
  title: PropTypes.string,
}

export default Quiz
