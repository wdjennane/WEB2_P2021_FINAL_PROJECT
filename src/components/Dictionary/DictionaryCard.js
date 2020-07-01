import React from "react"
import PropsTypes from "prop-types"
import {
  DictionaryCardWrapper,
  DictionaryCardTitle,
  DictionaryTitleWrapper,
} from "./DictionaryCardStyle"
import { NavIconDictionary } from "./../Nav/NavIcons"

const DictionaryCard = ({ children }) => {
  return (
    <DictionaryCardWrapper>
      <DictionaryTitleWrapper>
        <NavIconDictionary />
        <DictionaryCardTitle>Définition</DictionaryCardTitle>
      </DictionaryTitleWrapper>
      {children}
    </DictionaryCardWrapper>
  )
}

DictionaryCard.propsTypes = {
  children: PropsTypes.node,
}

export default DictionaryCard
