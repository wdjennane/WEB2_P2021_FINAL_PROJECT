import React from "react"
import {
  NavWrapper,
  NavList,
  NavItemLink,
  NavItem,
  NavHomeLink,
} from "./NavStyle"
import {
  NavIconDictionary,
  NavIconHome,
  NavIconMessage,
  NavIconSettings,
} from "./NavIcons"

const Nav = () => {
  const [homeLink, ...othersLinks] = [
    { to: "/", icon: <NavIconHome /> },
    { to: "/", icon: <NavIconDictionary /> },
    { to: "/message", icon: <NavIconMessage /> },
    { to: "/", icon: <NavIconSettings /> },
  ]

  return (
    <NavWrapper>
      <NavHomeLink to={homeLink.to}>
        {homeLink.icon}
        Accueil
      </NavHomeLink>
      <NavList>
        {othersLinks.map((link, index) => (
          <NavItem key={index}>
            <NavItemLink to={link.to}>{link.icon}</NavItemLink>
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  )
}

export default Nav
