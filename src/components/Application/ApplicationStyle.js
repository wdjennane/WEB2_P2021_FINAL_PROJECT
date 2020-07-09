import styled from "styled-components"
import { Link } from "react-router-dom"
import Colors from "../../jsStyles/Colors"

const ApplicationWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
`

const ApplicationContainer = styled.li`
  flex: 1 1 125px;
  margin: 1rem;
`

const ApplicationLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ApplicationImage = styled.img`
  height: 80px;
  width: 80px;
  background: ${Colors.Brand};
  border-radius: 5px;
  margin: 0 0 0.5rem 0;
`
const ApplicationText = styled.p`
  text-align: center;
  color: ${Colors.LightGrey};
`

export {
  ApplicationWrapper,
  ApplicationLink,
  ApplicationContainer,
  ApplicationImage,
  ApplicationText,
}
