import styled from "styled-components"
import Colors from "../../jsStyles/Colors"

const LayoutProgressWrapper = styled.div`
  background-color: ${Colors.BrandLight};
  height: 5px;
  position: fixed;
  top: calc(60px - 5px);
  left: 0;
  z-index: 1;
  width: 100%;
`

const LayoutProgressStyle = styled.div`
  height: 5px;
  background-color: ${Colors.Brand};
`

export { LayoutProgressWrapper, LayoutProgressStyle }
