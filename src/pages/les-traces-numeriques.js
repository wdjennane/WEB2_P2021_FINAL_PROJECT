import React from "react"
import Layout from "../components/Layout/Layout"
import DictionaryCard from "../components/Dictionary/DictionaryCard"
import { Text, Section } from "../components/Common/CommonStyle"

const TracesNumeriques = () => {
  return (
    <Layout title="Les traces numériques">
      <Section>
        <DictionaryCard>
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
