import React from "react"
import { useLocation } from "react-router-dom"
import PropsTypes from "prop-types"
import Nav from "../Nav/Nav"
import ProgressBar from "../ProgressBar/ProgressBar"
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
      {pathname !== "/" && (
        <LayoutHeader>
          {pathname === "/message" ||
          pathname === "/les-traces-numeriques/message" ? (
            <MessageHeader contactName={title} />
          ) : (
            <LayoutTitle>{title}</LayoutTitle>
          )}
        </LayoutHeader>
      )}
      <LayoutContainer
        style={{ height: pathname === "/" && "calc(100% - 46px)" }}
      >
        <ProgressBar />
        {children}
      </LayoutContainer>
      <Nav />
    </LayoutWrapper>
  )
}

Layout.propsTypes = {
  children: PropsTypes.node,
}

export default Layout
