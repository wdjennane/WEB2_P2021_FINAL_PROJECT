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

  const question =
    questions.length &&
    questions.find((question, index) => {
      return index + 1 === Number(questionId)
    })

  const goBack = () => {
    if (questionId === 1) return `/${url}`
    return `/${url}/question/${questionId - 1}`
  }

  const onSwipe = (direction) => {
    if (direction === "right") {
      history.push(`/${url}/correct/${questionId}`)
    }

    if (direction === "left") {
      history.push(`/${url}/incorrect/${questionId}`)
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
          image={`/images/${endpoint}-${questionId}.jpg`}
          text={question.question}
          incorrectPath={`/${url}/incorrect/${questionId}`}
          correctPath={`/${url}/correct/${questionId}`}
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
