import styled from "styled-components"
import { Link } from "react-router-dom"
import Colors from "../../jsStyles/Colors"

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  box-shadow: 0px 4px 35px rgba(146, 146, 146, 0.25);
  background-color: white;
`

const NavHomeLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${Colors.Brand};

  svg {
    margin: 0 0.5rem 0 0;
    height: 30px;
    width: 30px;
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
`

const NavItem = styled.li`
  &:not(:last-child) {
    margin: 0 1rem 0 0;
  }

  svg {
    height: 30px;
    width: 30px;
  }
`

const NavItemLink = styled(Link)`
  display: flex;
  align-items: center;
`

export { NavWrapper, NavList, NavItemLink, NavItem, NavHomeLink }
