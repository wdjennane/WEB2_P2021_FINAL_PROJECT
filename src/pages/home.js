import React from "react"
import Layout from "../components/Layout/Layout"
import { HomeContainer } from "../components/Applications/HomeStyle"
import Applications from "../components/Applications/Applications"
import Notification from "../components/Notification/Notification"

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <Notification text="✉️ EXPLICATION NON LU" path="/message" />
        <h1>Les dangers du web</h1>
        <Applications />
      </HomeContainer>
    </Layout>
  )
}

export default Home
