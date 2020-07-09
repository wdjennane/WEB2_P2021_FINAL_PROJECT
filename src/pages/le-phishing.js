import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import DictionaryCard from "../components/Dictionary/DictionaryCard"
import { Text, Section } from "../jsStyles/CommonStyle"

const Phishing = () => {
  const history = useHistory()

  const onScroll = () => history.push("/le-phishing/question/1")

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
    <Layout title="Le phishing">
      <Section>
        <DictionaryCard to="/le-phishing/question/1">
          <Text>
            Procédé d'arnaque monté par des pirates informatiques dans la
            volonté de <span>récupérer des informations confidentielles </span>{" "}
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
