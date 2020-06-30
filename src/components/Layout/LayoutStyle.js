import styled from "styled-components"
import Colors from "../Colors/Colors"

const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LayoutHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LayoutTitle = styled.h3`
  font-weight: bold;
  color: ${Colors.Darkgrey};
`

const LayoutContainer = styled.div`
  display: block;
  height: calc(100% - 80px - 46px);
  overflow-y: scroll;
`

export { LayoutWrapper, LayoutHeader, LayoutTitle, LayoutContainer }
