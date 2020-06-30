import React from "react"
import PropsTypes from "prop-types"
import Nav from "../Nav/Nav"
import { LayoutWrapper, LayoutContainer } from "./LayoutStyle"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutContainer>{children}</LayoutContainer>
      <Nav />
    </LayoutWrapper>
  )
}

Layout.propsTypes = {
  children: PropsTypes.node,
}

export default Layout
