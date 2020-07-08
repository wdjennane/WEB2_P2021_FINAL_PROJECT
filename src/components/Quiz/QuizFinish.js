import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Layout from "../Layout/Layout"
import { Text, Button } from "../../jsStyles/CommonStyle"
import Finish from "../../assets/images/finish.svg"

const QuizFinishWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

const QuizFinish = ({ title, next }) => {
  return (
    <Layout title={title} hasPadding>
      <QuizFinishWrapper>
        <img
          src={Finish}
          alt="finish"
          style={{
            width: "100%",
            height: "40%",
          }}
        />
        <h2
          style={{
            margin: "0 0 1rem",
            fontWeight: "600",
            textAlign: "center",
            color: "black",
          }}
        >
          Découvres vite la suite !
        </h2>
        <Text style={{ margin: "1rem" }}>
          Tu as finis “<span>{title}</span>” ! Continues à t’informer en
          débloquant de nouveaux thèmes.
        </Text>
        <Button to={`/${next}`} style={{ margin: "2rem auto 1rem" }}>
          Parcours suivant
        </Button>
      </QuizFinishWrapper>
    </Layout>
  )
}

QuizFinish.propTypes = {
  title: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
}

export default QuizFinish
