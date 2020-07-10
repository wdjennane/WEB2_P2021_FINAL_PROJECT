import React from "react"
import { LayoutProgressWrapper, LayoutProgressStyle } from "./ProgressBarStyle"

const ProgressBar = ({ progressWidth }) => {
  return (
    <LayoutProgressWrapper>
      <LayoutProgressStyle style={{ width: `${progressWidth || 0}%` }} />
    </LayoutProgressWrapper>
  )
}

export default ProgressBar
