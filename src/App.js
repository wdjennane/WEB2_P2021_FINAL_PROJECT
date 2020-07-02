import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Home from "./pages/home"
import Message from "./pages/message"
import Dictionary from "./pages/dictionary"
import Settings from "./pages/settings"
import LesDangersDuWeb from "./pages/les-dangers-du-web"
import TracesNumeriques from "./pages/les-traces-numeriques"
import Phishing from "./pages/le-phishing"
import RevengePorn from "./pages/le-revenge-porn"
import TracesNumeriquesQuestion from "./components/TracesNumeriques/TracesNumeriquesQuestion"
import TracesNumeriquesIncorrect from "./components/TracesNumeriques/TracesNumeriquesIncorrect"
import PhishingQuestion from "./components/Phishing/PhishingQuestion"
import PhishingIncorrect from "./components/Phishing/PhishingIncorrect"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/message" component={Message} exact />
        <Route path="/dictionary" component={Dictionary} exact />
        <Route path="/settings" component={Settings} exact />
        <Route path="/les-dangers-du-web" component={LesDangersDuWeb} exact />
        <Route
          path="/les-traces-numeriques"
          component={TracesNumeriques}
          exact
        />
        <Route
          path="/les-traces-numeriques/question/:id"
          component={TracesNumeriquesQuestion}
        />
        <Route
          path="/les-traces-numeriques/incorrect/:id"
          component={TracesNumeriquesIncorrect}
        />
        <Route path="/le-phishing" component={Phishing} exact />
        <Route path="/le-phishing/question/:id" component={PhishingQuestion} />
        <Route
          path="/le-phishing/incorrect/:id"
          component={PhishingIncorrect}
        />
        <Route path="/le-revenge-porn" component={RevengePorn} exact />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default App
