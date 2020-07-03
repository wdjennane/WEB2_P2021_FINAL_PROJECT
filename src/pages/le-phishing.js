import React from "react"
import Layout from "../components/Layout/Layout"
import DictionaryCard from "../components/Dictionary/DictionaryCard"
import { Text, Section } from "../jsStyles/CommonStyle"

const Phishing = () => {
  return (
    <Layout title="Le phishing">
      <Section>
        <DictionaryCard>
          <Text>
            Procédé d'arnaque monté par des pirates informatiques dans la
            volonté de <span>récupérer des informations confidentielles</span>{" "}
            auprès des utilisateurs.
          </Text>
          <Text>
            Grâce à des techniques de phishing ils ont réussi à avoir les
            coordonnées bancaires d'une quinzaine de victimes en moins d'une
            semaine.
          </Text>
        </DictionaryCard>
      </Section>
    </Layout>
  )
}

export default Phishing
