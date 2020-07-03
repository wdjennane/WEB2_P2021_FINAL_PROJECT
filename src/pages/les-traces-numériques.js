import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import DictionaryCard from "../components/Dictionary/DictionaryCard"
import { Text, Section } from "../jsStyles/CommonStyle"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const TracesNumeriques = () => {
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
    <Layout title="Les traces numériques">
      <Link to="/les-traces-numeriques/message">
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
      <Section>
        <DictionaryCard>
          <Text>
            <span>
              Commander en ligne, renseigner un formulaire, publier des photos,
              partager son opinion sur un film, effectuer une recherche
            </span>
            : toute activité sur le web crée des traces.
          </Text>
          <Text>
            Les informations ainsi collectées sont conservées et analysées.
          </Text>
        </DictionaryCard>
      </Section>
    </Layout>
  )
}

export default TracesNumeriques
