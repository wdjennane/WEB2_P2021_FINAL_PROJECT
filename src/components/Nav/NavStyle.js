import styled from "styled-components"
import { Link } from "react-router-dom"

const NavWrapper = styled.nav`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`

const NavHomeLink = styled(Link)`
  display: flex;
  align-items: center;

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
    margin: 0 0.5rem 0 0;
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
