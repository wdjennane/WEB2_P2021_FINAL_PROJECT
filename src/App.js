import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home"
import Message from "./pages/message"
import Dictionary from "./pages/dictionary"
import Settings from "./pages/settings"
import LesDangersDuWeb from "./pages/les-dangers-du-web"
import TracesNumeriques from "./pages/les-traces-numeriques"
import TracesNumeriquesMessage from "./pages/les-traces-numériques-message"
import Phishing from "./pages/le-phishing"
import RevengePorn from "./pages/le-revenge-porn"
import Quiz from "./components/Quiz/Quiz"
import QuizNext from "./components/Quiz/QuizNext"
import QuizFinish from "./components/Quiz/QuizFinish"
import Layout from "./components/Layout/Layout"

const App = () => {
  const quizRouter = [
    {
      title: "Les traces numériques",
      url: "/les-traces-numeriques",
      endpoint: "digital-traces",
      next: "/le-phishing",
      composant: TracesNumeriques,
    },
    {
      title: "Le phishing",
      url: "/le-phishing",
      endpoint: "phishing",
      next: "/le-revenge-porn",
      composant: Phishing,
    },
    {
      title: "Le revenge porn",
      url: "/le-revenge-porn",
      endpoint: "revenge-porn",
      next: "/les-traces-numeriques",
      composant: RevengePorn,
    },
  ]
  const [progressWidth, setProgressWidth] = useState(0)

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/message" component={Message} exact />
        <Route
          path="/les-traces-numeriques/message"
          component={TracesNumeriquesMessage}
          exact
        />
        <Route path="/dictionary" component={Dictionary} exact />
        <Route path="/settings" component={Settings} exact />
        <Route
          path="/les-dangers-du-web"
          render={() => (
            <LesDangersDuWeb
              progressWidth={progressWidth}
              setProgressWidth={setProgressWidth}
            />
          )}
          exact
        />
      </Switch>

      {quizRouter.map((quiz, index) => (
        <Switch key={index}>
          <Route path={`${quiz.url}`} component={quiz.composant} exact />
          <Route
            path={`${quiz.url}/question/:id`}
            render={() => (
              <Quiz
                url={quiz.url}
                title={quiz.title}
                endpoint={quiz.endpoint}
                progressWidth={progressWidth}
                setProgressWidth={setProgressWidth}
              />
            )}
          />
          <Route
            path={`${quiz.url}/incorrect/:id`}
            render={() => (
              <QuizNext
                title={quiz.title}
                url={quiz.url}
                endpoint={quiz.endpoint}
                progressWidth={progressWidth}
                setProgressWidth={setProgressWidth}
              />
            )}
          />
          <Route
            path={`${quiz.url}/correct/:id`}
            render={() => (
              <QuizNext
                isCorrect
                title={quiz.title}
                url={quiz.url}
                endpoint={quiz.endpoint}
                progressWidth={progressWidth}
                setProgressWidth={setProgressWidth}
              />
            )}
          />
          <Route
            path={`${quiz.url}/finish`}
            render={() => (
              <Layout
                title={quiz.title}
                progressWidth={progressWidth}
                hasPadding
              >
                <QuizFinish
                  title={quiz.title}
                  next={quiz.next}
                  setProgressWidth={setProgressWidth}
                />
              </Layout>
            )}
            exact
          />
        </Switch>
      ))}
      {/* <Switch>
        <Route path="*" exact render={() => <Redirect to="/" />} />
      </Switch> */}
    </Router>
  )
}

export default App
