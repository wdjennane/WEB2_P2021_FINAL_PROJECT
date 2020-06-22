import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Home from "./pages/home"
import Message from "./pages/message"
import DangersDuWeb from "./pages/dangers-du-web/index"
import DangersDuWebGame from "./pages/dangers-du-web/game"
import DangersDuWebNext from "./pages/dangers-du-web/next"
import Doxing from "./pages/doxing/index"
import DoxingGame from "./pages/doxing/game"
import DoxingNext from "./pages/doxing/next"

const App = () => {
  const applications = [
    {
      name: "Les dangers du web",
      routes: [
        { url: "/dangers-du-web", component: DangersDuWeb },
        { url: "/dangers-du-web/game", component: DangersDuWebGame },
        { url: "/dangers-du-web/next", component: DangersDuWebNext },
      ],
    },
    {
      name: "Le doxing",
      routes: [
        { url: "/doxing", component: Doxing },
        { url: "/doxing/game", component: DoxingGame },
        { url: "/doxing/next", component: DoxingNext },
      ],
    },
  ]

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/message" component={Message} exact />

        {applications.map((application) => {
          return application.routes.map((route) => (
            <Route path={route.url} component={route.component} exact />
          ))
        })}

        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  )
}

export default App
