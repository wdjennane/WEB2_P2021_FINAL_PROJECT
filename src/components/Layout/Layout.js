import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import PropsTypes from "prop-types"
import Nav from "../Nav/Nav"
import {
  LayoutWrapper,
  LayoutHeader,
  LayoutTitle,
  LayoutContainer,
  LayoutProgressWrapper,
  LayoutProgressStyle,
} from "./LayoutStyle"
import MessageHeader from "../Message/MessageHeader/MessageHeader"

const Layout = ({ children, title }) => {
  const { pathname } = useLocation()

  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (windowScroll / height) * 100

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <LayoutWrapper>
      {pathname !== "/" && (
        <LayoutHeader>
          {pathname === "/message" ? (
            <MessageHeader contactName={title} />
          ) : (
            <LayoutTitle>{title}</LayoutTitle>
          )}
        </LayoutHeader>
      )}
      <LayoutContainer
        style={{ height: pathname === "/" && "calc(100% - 46px)" }}
      >
        <LayoutProgressWrapper>
          <LayoutProgressStyle style={{ width: `${scrollTop}%` }} />
        </LayoutProgressWrapper>
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
