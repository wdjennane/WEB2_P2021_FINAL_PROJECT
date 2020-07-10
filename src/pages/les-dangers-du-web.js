import React from "react"
import ReactPageScroller from "react-page-scroller"
import PropsTypes from "prop-types"
import Layout from "../components/Layout/Layout"
import Step from "../components/Step/Step"
import DictionaryCard from "../components/Dictionary/DictionaryCard"
import QuizFinish from "../components/Quiz/QuizFinish"
import {
  LesDangersDuWebList,
  LesDangersDuWebItem,
  LesDangersDuWebVideo,
  LesDangersDuWebVideoWrapper,
  LesDangersDuWebImage1,
  LesDangersDuWebImage2,
  LesDangersDuWebImage3,
  LesDangersDuWebImage4,
} from "../jsStyles/pages/LesDangersDuWebStyle"
import { Text, Section } from "../jsStyles/CommonStyle"

const LesDangersDuWeb = ({ progressWidth, setProgressWidth }) => {
  const pageOnChange = (number) => setProgressWidth((number / 6) * 100)

  return (
    <Layout title="Introduction" progressWidth={progressWidth}>
      <ReactPageScroller
        containerHeight="100%"
        containerWidth="100%"
        pageOnChange={pageOnChange}
      >
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
          <LesDangersDuWebVideoWrapper>
            <LesDangersDuWebVideo>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/2b54gMTgnaE"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Les dangers d'internet chez les jeunes"
              ></iframe>
            </LesDangersDuWebVideo>
          </LesDangersDuWebVideoWrapper>

          <Text>
            <span>Si tu te retrouve dans un des cas cités :</span>
          </Text>

          <LesDangersDuWebList>
            <LesDangersDuWebItem>
              <span role="img" aria-label="parent">
                👫
              </span>
              Parent
            </LesDangersDuWebItem>
            <LesDangersDuWebItem>
              <span role="img" aria-label="family">
                👪
              </span>
              Proche
            </LesDangersDuWebItem>
            <LesDangersDuWebItem>
              <span role="img" aria-label="policemen">
                👮
              </span>
              Police
            </LesDangersDuWebItem>
          </LesDangersDuWebList>
        </Section>

        <Section>
          <QuizFinish
            title="L’introduction aux dangers du web"
            next="/les-traces-numeriques"
            setProgressWidth={setProgressWidth}
          />
        </Section>
      </ReactPageScroller>
    </Layout>
  )
}

Layout.propsTypes = {
  progressWidth: PropsTypes.number,
  setProgressWidth: PropsTypes.func,
}

export default LesDangersDuWeb
