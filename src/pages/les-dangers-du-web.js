import React from "react"
import Layout from "../components/Layout/Layout"
import Step from "../components/Step/Step"
import DictionaryCard from "../components/Dictionary/DictionaryCard"
import {
  LesDangersDuWebList,
  LesDangersDuWebItem,
  LesDangersDuWebVideo,
  LesDangersDuWebItemImage,
  LesDangersDuWebImage1,
  LesDangersDuWebImage2,
  LesDangersDuWebImage3,
  LesDangersDuWebImage4,
} from "../components/LesDangersDuWeb/LesDangersDuWebStyle"
import { Text, Section, Button } from "../components/Common/CommonStyle"
import WebDangerEnd from "../assets/images/web-danger-end.svg"
import ReactPageScroller from "../../node_modules/react-page-scroller"

const LesDangersDuWeb = () => {
  return (
    <Layout title="Les dangers du web">
      <ReactPageScroller>
        <Section>
          <DictionaryCard>
            <Text>
              Internet est un grand « <span>espace</span> » auquel tout le monde
              peut accéder et qui regorge d'informations, de jeux et de moyens
              de Commonication, souvent utiles ou ludiques.
            </Text>
            <Text>
              Internet présente aussi des dangers, aussi faut-il l'utiliser avec
              précaution.
            </Text>
            <Text>
              <span>Sexting</span> ,<span> cyberpédophilie</span>,{" "}
              <span>intimidation</span>, les dérives et les dangers d’internet
              sont nombreux.
            </Text>
          </DictionaryCard>
        </Section>

        <Section>
          <Step
            headerTitle="Les pricipaux dangers du web"
            title="Cyber-harcèlement"
            stepNumber="01"
            image={LesDangersDuWebImage1}
          >
            <Text>
              Menaces, insultes, envoi de photos obscènes ou choquantes,
              rumeurs, tags sur des photos peu glorieuses.
            </Text>
          </Step>
        </Section>
        <Section>
          <Step
            headerTitle="Les pricipaux dangers du web"
            title="Cyberaddiction"
            stepNumber="02"
            image={LesDangersDuWebImage2}
          >
            <Text>
              Un <span>trouble psychologique</span> entraînant un besoin
              irrésistible et obsessionnel d'utiliser Internet.
            </Text>
          </Step>
        </Section>

        <Section>
          <Step
            headerTitle="Les pricipaux dangers du web"
            title="Abus sexuel"
            stepNumber="03"
            image={LesDangersDuWebImage3}
          >
            Toute interaction sexuelle impliquant une / des personne(s) qui n’y{" "}
            <span>consent(ent) pas</span>
          </Step>
        </Section>

        <Section>
          <Step
            headerTitle="Les pricipaux dangers du web"
            title="Vol d’identité numérique / coordonées bancaires"
            stepNumber="04"
            image={LesDangersDuWebImage4}
          >
            <Text>
              Le vol d’identité consiste à{" "}
              <span>utiliser, sans votre accord, vos informations</span>. Il
              peut s'agir, par exemple, de vos nom et prénom, de votre adresse
              électronique, ou encore de photographies.
            </Text>
          </Step>
        </Section>

        <Section>
          <Text>
            On te laisse découvrir davantage d’informations à propos des dangers
            avec <span>Le Roi des rats</span>
          </Text>

          <LesDangersDuWebVideo></LesDangersDuWebVideo>

          <Text>
            <span>Si tu te retrouve dans un des cas cités :</span>
          </Text>

          <LesDangersDuWebList>
            <LesDangersDuWebItem>
              <LesDangersDuWebItemImage />
              Parent
            </LesDangersDuWebItem>
            <LesDangersDuWebItem>
              <LesDangersDuWebItemImage />
              Proche
            </LesDangersDuWebItem>
            <LesDangersDuWebItem>
              <LesDangersDuWebItemImage />
              Police
            </LesDangersDuWebItem>
          </LesDangersDuWebList>
        </Section>

        <Section>
          <img
            alt=""
            src={WebDangerEnd}
            style={{
              width: "100%",
              height: "40%",
            }}
          />
          <h2
            style={{
              margin: "0 0 1rem",
              fontWeight: "600",
              textAlign: "center",
              color: "black",
            }}
          >
            Découvres vite la suite !
          </h2>
          <Text>
            Tu as finis “<span>L’introduction aux dangers du web</span>” !
            Continues à t’informer en débloquant de nouveaux thèmes.
          </Text>
          <Button to="/" style={{ margin: "2rem auto 1rem" }}>
            Parcours suivant
          </Button>
          <Button to="/" style={{ margin: "2rem auto 1rem" }}>
            Retourner à l'accueil
          </Button>
        </Section>
      </ReactPageScroller>
    </Layout>
  )
}

export default LesDangersDuWeb
