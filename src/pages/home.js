import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { HomeContainer } from "../components/Applications/HomeStyle"
import Applications from "../components/Applications/Applications"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Home = () => {
  useEffect(() => {
    toast("✉️ EXPLICATION NON LU", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }, [])

  return (
    <Layout>
      <HomeContainer>
        <Link to="/message">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Link>
        <h1>Les dangers du web</h1>
        <Applications />
      </HomeContainer>
    </Layout>
  )
}

export default Home
