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
import Phishing from "./pages/le-phishing"
import TracesNumeriques from "./pages/les-traces-numériques"
import TracesNumeriquesMessage from "./pages/les-traces-numériques-message"
import RevengePorn from "./pages/le-revenge-porn"

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
          path="/les-traces-numeriques/message"
          component={TracesNumeriquesMessage}
          exact
        />
        <Route path="/le-phishing" component={Phishing} exact />
        <Route path="/le-revenge-porn" component={RevengePorn} exact />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default App
