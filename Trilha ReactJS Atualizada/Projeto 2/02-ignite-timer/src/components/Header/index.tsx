import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

import logoIgnite from "../../assets/logo-ignite.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <header>
      <HeaderContainer>
        <img src={logoIgnite} alt="" />
        <nav>
          <NavLink to="/" title="Temporizador">
            <Timer size={24} />
          </NavLink>
          <NavLink to="/history" title="Histórico">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </header>
  )
}
