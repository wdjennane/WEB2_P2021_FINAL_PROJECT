import React from "react"
import Layout from "../components/Layout/Layout"

import Card from "../components/Card/Card"

const Home = () => {
  return (
    <Layout>
      Homepage
      <Card
        question={false}
        title="A ton avis ?"
        path="https://i.imgur.com/OeB3kxl.png"
        text="Est-il suffisant de supprimer son historique de recherche ?"
      />
    </Layout>
  )
}

export default Home
