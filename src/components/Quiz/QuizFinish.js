import React from "react"
import PropTypes from "prop-types"
import Layout from "../Layout/Layout"

const QuizFinish = ({ title }) => {
  return (
    <Layout title={title}>
      Vous aviez terminé <br />
      {title}
    </Layout>
  )
}

QuizFinish.propTypes = {
  title: PropTypes.string,
}

export default QuizFinish
