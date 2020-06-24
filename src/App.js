import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Home from "./pages/home"
import Message from "./pages/message"
import LesDangersDuWeb from "./pages/les-dangers-du-web"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/message" component={Message} exact />
        <Route path="/les-dangers-du-web" component={LesDangersDuWeb} exact />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default App
