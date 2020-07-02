import React from "react"
import Layout from "../components/Layout/Layout"
import DictionaryCard from "../components/Dictionary/DictionaryCard"
import { Text, Section } from "../jsStyles/CommonStyle"

const RevengePorn = () => {
  return (
    <Layout title="Le revenge porn">
      <Section>
        <DictionaryCard>
          <Text>
            Depuis un moment, des comptes Telegram, snapchat, instagram{" "}
            <span>“Fisha”</span>
            sont crées.
          </Text>
          <Text>
            Ils diffusent du <span>cyber-harcèlement</span> et du{" "}
            <span>slut-shaming</span> à l’encontre de jeunes filles qui ont pour
            la plupart, entre 13 et 20 ans. Certains comptes sont suivis par
            plus de 50 000 personnes.
          </Text>
          <Text>
            Avec le <span>#stopfisha</span> sur Twitter, vous pourrez trouver
            chaque jour la liste des nouveaux comptes crées pour les signaler.
          </Text>
        </DictionaryCard>
      </Section>
    </Layout>
  )
}

export default RevengePorn
