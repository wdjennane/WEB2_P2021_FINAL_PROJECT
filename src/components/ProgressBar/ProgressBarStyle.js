import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const LayoutProgressWrapper = styled.div`
  background-color: ${Colors.BrandLight};
  height: 4px;
  position: fixed;
  top: calc(60px - 4px);
  left: 0;
  z-index: 1;
  width: 100%;
`

const LayoutProgressStyle = styled.div`
  height: 4px;
  background-color: ${Colors.Brand};
  transition: width 0.3s ease;
`

export { LayoutProgressWrapper, LayoutProgressStyle }
