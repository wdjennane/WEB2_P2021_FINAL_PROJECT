import React from "react"
import { useParams, useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import Layout from "../Layout/Layout"
import Card from "../Card/Card"
import Mock from "../../mock/index"
import TinderCard from "react-tinder-card"

const Quiz = ({ endpoint, title }) => {
  const { id: questionId } = useParams()

  const { results } = Mock.find((mock) => mock.endpoint === endpoint)
  const data = results.find((mock) => mock.id.toString() === questionId)
  const history = useHistory()

  const goBack = () => {
    if (data.id === 1) return `/${endpoint}`
    return `/${endpoint}/question/${(data.id - 1).toString()}`
  }

  const onSwipe = (direction) => {
    if (direction === "right") {
      history.push(`/${endpoint}/correct/${data.id}`)
    }

    if (direction === "left") {
      history.push(`/${endpoint}/incorrect/${data.id}`)
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
          title={data.title}
          image={data.image}
          text={data.description}
          incorrectPath={`/${endpoint}/incorrect/${data.id}`}
          goBack={goBack()}
          correctPath={`/${endpoint}/correct/${data.id}`}
        />
      </TinderCard>
    </Layout>
  )
}

Quiz.propTypes = {
  endpoint: PropTypes.string,
  title: PropTypes.string,
}

export default Quiz
