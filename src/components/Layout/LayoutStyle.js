import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const LayoutWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LayoutHeader = styled.div`
  height: ${({ isMessage }) => (isMessage ? "80px" : "60px")};
  display: flex;
  align-items: center;
  justify-content: center;
`

const LayoutTitle = styled.h3`
  font-weight: bold;
  color: ${Colors.TextDark};
`

const LayoutContainer = styled.div`
  display: block;
  height: ${({ isMessage }) =>
    isMessage ? "calc(100% - 126px)" : "calc(100% - 106px)"};
  padding: ${({ hasPadding }) => (hasPadding ? "1rem" : "unset")};
`

export { LayoutWrapper, LayoutHeader, LayoutTitle, LayoutContainer }
