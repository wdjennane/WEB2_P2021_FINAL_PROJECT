import React, { useState, useEffect } from "react"
import { LayoutProgressWrapper, LayoutProgressStyle } from "./ProgressBarStyle"

const ProgressBar = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <LayoutProgressWrapper>
      <LayoutProgressStyle style={{ width: `${scrollTop}%` }} />
    </LayoutProgressWrapper>
  )
}

export default ProgressBar
