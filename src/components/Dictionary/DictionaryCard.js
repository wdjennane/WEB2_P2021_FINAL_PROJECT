import React from "react"
import PropsTypes from "prop-types"
import { Link } from "react-router-dom"
import {
  DictionaryCardWrapper,
  DictionaryCardTitle,
  DictionaryTitleWrapper,
  DictionaryCardIcon,
} from "./DictionaryCardStyle"
import DownArrow from "../../assets/icons/down-arrow.svg"

const DictionaryCard = ({ children, to }) => {
  return (
    <DictionaryCardWrapper>
      <DictionaryTitleWrapper>
        <DictionaryCardTitle>Définition</DictionaryCardTitle>
      </DictionaryTitleWrapper>
      {children}
      {to ? (
        <Link to={to}>
          <DictionaryCardIcon src={DownArrow} alt="down arrow" />
        </Link>
      ) : (
        <DictionaryCardIcon src={DownArrow} alt="down arrow" />
      )}
    </DictionaryCardWrapper>
  )
}

DictionaryCard.propsTypes = {
  children: PropsTypes.node.isRequired,
  to: PropsTypes.string,
}

export default DictionaryCard
