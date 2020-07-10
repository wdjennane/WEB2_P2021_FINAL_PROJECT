import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Button } from "../../jsStyles/CommonStyle"
import {
  QuizFinishWrapper,
  QuizFinishImage,
  QuizFinishTitle,
  QuizFinishText,
} from "./QuizFinishStyle"
import Finish from "../../assets/images/finish.svg"

const QuizFinish = ({ title, next, setProgressWidth }) => {
  useEffect(() => {
    setProgressWidth(100)
  }, [setProgressWidth])

  return (
    <QuizFinishWrapper>
      <QuizFinishImage src={Finish} alt="finish" />
      <QuizFinishTitle>Découvres vite la suite !</QuizFinishTitle>
      <QuizFinishText>
        <p>
          Tu as finis “<span>{title}</span>” ! Continues à t’informer en
          débloquant de nouveaux thèmes.
        </p>
        <p>
          Tu pourras retrouver les <span>définitions</span> dans la rubrique “
          <span>Dictionnaire</span>”.
        </p>
      </QuizFinishText>
      <Button to={next}>Parcours suivant</Button>
      <Button to="/">Retouner à l'accueil</Button>
    </QuizFinishWrapper>
  )
}

QuizFinish.propTypes = {
  title: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  setProgressWidth: PropTypes.func,
}

export default QuizFinish
