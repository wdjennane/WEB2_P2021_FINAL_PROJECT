import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home"
import Message from "./pages/message"
import Dictionary from "./pages/dictionary"
import Settings from "./pages/settings"
import LesDangersDuWeb from "./pages/les-dangers-du-web"
import TracesNumeriques from "./pages/les-traces-numeriques"
import Phishing from "./pages/le-phishing"
import RevengePorn from "./pages/le-revenge-porn"
import Quiz from "./components/Quiz/Quiz"
import QuizNext from "./components/Quiz/QuizNext"
import QuizFinish from "./components/Quiz/QuizFinish"

const App = () => {
  const quizRouter = [
    {
      title: "Les traces numériques",
      endpoint: "les-traces-numeriques",
      composant: TracesNumeriques,
    },
    {
      title: "Le phishing",
      endpoint: "le-phishing",
      composant: Phishing,
    },
    {
      title: "Le revenge porn",
      endpoint: "le-revenge-porn",
      composant: RevengePorn,
    },
  ]

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/message" component={Message} exact />
        <Route path="/dictionary" component={Dictionary} exact />
        <Route path="/settings" component={Settings} exact />
        <Route path="/les-dangers-du-web" component={LesDangersDuWeb} exact />
      </Switch>
      {quizRouter.map((quiz, index) => (
        <Switch key={index}>
          <Route path={`/${quiz.endpoint}`} component={quiz.composant} exact />
          <Route
            path={`/${quiz.endpoint}/question/:id`}
            render={() => <Quiz title={quiz.title} endpoint={quiz.endpoint} />}
          />
          <Route
            path={`/${quiz.endpoint}/correct/:id`}
            render={() => (
              <QuizNext isCorrect title={quiz.title} endpoint={quiz.endpoint} />
            )}
          />
          <Route
            path={`/${quiz.endpoint}/incorrect/:id`}
            render={() => (
              <QuizNext title={quiz.title} endpoint={quiz.endpoint} />
            )}
          />
          <Route
            path={`/${quiz.endpoint}/finish`}
            render={() => <QuizFinish title={quiz.title} />}
            exact
          />
        </Switch>
      ))}
      {/* <Switch>
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch> */}
    </Router>
  )
}

export default App
