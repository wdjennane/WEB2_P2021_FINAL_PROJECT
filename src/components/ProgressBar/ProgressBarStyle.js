import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const LayoutProgressWrapper = styled.div`
  background-color: ${Colors.BrandLight};
  height: 2px;
  position: fixed;
  top: calc(60px - 2px);
  left: 0;
  z-index: 1;
  width: 100%;
`

const LayoutProgressStyle = styled.div`
  height: 2px;
  background-color: ${Colors.Brand};
`

export { LayoutProgressWrapper, LayoutProgressStyle }
