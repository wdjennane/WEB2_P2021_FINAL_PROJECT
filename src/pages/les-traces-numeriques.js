import React from "react"
import Layout from "../components/Layout/Layout"
import DictionaryCard from "../components/Dictionary/DictionaryCard"
import { Text, Section } from "../jsStyles/CommonStyle"

const TracesNumeriques = () => {
  return (
    <Layout title="Les traces numériques">
      <Section>
        <DictionaryCard to="/les-traces-numeriques/question/1">
          <Text>
            <span>
              Commander en ligne, renseigner un formulaire, publier des photos,
              partager son opinion sur un film, effectuer une recherche
            </span>{" "}
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
