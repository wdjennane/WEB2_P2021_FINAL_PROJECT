import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import DictionaryCard from "../components/Dictionary/DictionaryCard"
import { Text, Section } from "../jsStyles/CommonStyle"

const RevengePorn = () => {
  const history = useHistory()

  const onScroll = () => history.push("/le-revenge-porn/question/1")

  useEffect(() => {
    window.addEventListener("wheel", onScroll)
    window.addEventListener("touchmove", onScroll)
    return () => {
      window.removeEventListener("wheel", onScroll)
      window.removeEventListener("touchmove", onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout title="Le revenge porn">
      <Section>
        <DictionaryCard to="/le-revenge-porn/question/1">
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
