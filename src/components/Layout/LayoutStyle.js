import styled from "styled-components"

const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LayoutContainer = styled.div`
  height: calc(100% - 46px);
`

export { LayoutWrapper, LayoutContainer }
