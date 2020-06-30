import React from "react"
import Layout from "../components/Layout/Layout"
import HomeBackground from "../assets/images/home-background.svg"
import HeaderNotification from "../components/Applications/HeaderNotice/HeaderNotification"
import { HomeContainer } from "../components/Applications/HomeStyle"
import Applications from "../components/Applications/Applications"

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <HeaderNotification />
        <h1>Les dangers du web</h1>
        <Applications />
      </HomeContainer>
    </Layout>
  )
}

export default Home
