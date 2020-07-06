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

const Layout = ({ children, title, hasPadding, isMessage }) => {
  const { pathname } = useLocation()

  return (
    <LayoutWrapper>
      {pathname !== "/" && (
        <LayoutHeader isMessage={isMessage}>
          {pathname === "/message" ||
          pathname === "/les-traces-numeriques/message" ? (
            <MessageHeader contactName={title} />
          ) : (
            <LayoutTitle>{title}</LayoutTitle>
          )}
        </LayoutHeader>
      )}

      {pathname !== "/" &&
        pathname !== "/message" &&
        pathname !== "/les-traces-numeriques/message" && <ProgressBar />}

      <LayoutContainer
        isMessage={isMessage}
        hasPadding={hasPadding}
        style={{
          height: pathname === "/" && "calc(100% - 46px)",
        }}
      >
        {children}
      </LayoutContainer>
      <Nav />
    </LayoutWrapper>
  )
}

Layout.propsTypes = {
  children: PropsTypes.node,
  isMessage: PropsTypes.bool,
  hasPadding: PropsTypes.bool,
}

export default Layout
