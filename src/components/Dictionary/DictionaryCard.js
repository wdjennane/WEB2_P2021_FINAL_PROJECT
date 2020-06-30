import React from "react"
import PropsTypes from "prop-types"
import {
  DictionaryCardWrapper,
  DictionaryCardTitle,
} from "./DictionaryCardStyle"

const DictionaryCard = ({ children }) => {
  return (
    <DictionaryCardWrapper>
      <DictionaryCardTitle>Définition</DictionaryCardTitle>
      {children}
    </DictionaryCardWrapper>
  )
}

DictionaryCard.propsTypes = {
  children: PropsTypes.node,
}

export default DictionaryCard
