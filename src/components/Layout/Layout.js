import React from "react"
import PropsTypes from "prop-types"
import { LayoutWrapper, LayoutContainer } from "./LayoutStyle"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutContainer>{children}</LayoutContainer>
    </LayoutWrapper>
  )
}

Layout.propsTypes = {
  children: PropsTypes.node,
}

export default Layout
