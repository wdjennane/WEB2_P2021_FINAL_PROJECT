import React from "react"
import { useLocation, useHistory } from "react-router-dom"
import PropsTypes from "prop-types"
import Nav from "../Nav/Nav"
import ProgressBar from "../ProgressBar/ProgressBar"
import {
  LayoutWrapper,
  LayoutHeader,
  LayoutTitle,
  LayoutContainer,
  LayoutBackLink,
} from "./LayoutStyle"
import MessageHeader from "../Message/MessageHeader/MessageHeader"
import BackIcon from "../../assets/icons/back-arrow.svg"

const Layout = ({
  children,
  title,
  progressWidth,
  hasPadding,
  isMessage,
  isCard,
}) => {
  const { pathname } = useLocation()
  const { goBack } = useHistory()

  return (
    <LayoutWrapper>
      {pathname !== "/" && (
        <LayoutHeader isMessage={isMessage}>
          <LayoutBackLink onClick={goBack} src={BackIcon} alt="back" />
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
        pathname !== "/les-traces-numeriques/message" && (
          <ProgressBar progressWidth={progressWidth} />
        )}

      <LayoutContainer
        isMessage={isMessage}
        hasPadding={hasPadding}
        isCard={isCard}
        style={{
          height: pathname === "/" && "calc(100% - 46px)",
          margin: pathname === "/" && "0 auto 46px",
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
  progressWidth: PropsTypes.number,
  isMessage: PropsTypes.bool,
  hasPadding: PropsTypes.bool,
  isCard: PropsTypes.bool,
}

export default Layout
