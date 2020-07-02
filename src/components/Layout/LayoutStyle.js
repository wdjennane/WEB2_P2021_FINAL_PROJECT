import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

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
  color: ${Colors.TextDark};
`

const LayoutContainer = styled.div`
  display: block;
  height: calc(100% - 80px - 46px);
  overflow-y: scroll;
`

const LayoutProgressWrapper = styled.div`
  background-color: ${Colors.BrandLight};
  height: 5px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`

const LayoutProgressStyle = styled.div`
  height: 5px;
  background-color: ${Colors.Brand};
`

export {
  LayoutWrapper,
  LayoutHeader,
  LayoutTitle,
  LayoutContainer,
  LayoutProgressWrapper,
  LayoutProgressStyle,
}
