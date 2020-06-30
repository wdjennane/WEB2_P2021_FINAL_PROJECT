import React from "react"
import { useLocation } from "react-router-dom"
import PropsTypes from "prop-types"
import Nav from "../Nav/Nav"
import {
  LayoutWrapper,
  LayoutHeader,
  LayoutTitle,
  LayoutContainer,
} from "./LayoutStyle"
import MessageHeader from "../Message/MessageHeader/MessageHeader"

const Layout = ({ children, title }) => {
  const { pathname } = useLocation()

  return (
    <LayoutWrapper>
      <LayoutHeader>
        {pathname === "/message" ? (
          <MessageHeader contactName={title} />
        ) : (
          <LayoutTitle>{title}</LayoutTitle>
        )}
      </LayoutHeader>
      <LayoutContainer>{children}</LayoutContainer>
      <Nav />
    </LayoutWrapper>
  )
}

Layout.propsTypes = {
  children: PropsTypes.node,
}

export default Layout
