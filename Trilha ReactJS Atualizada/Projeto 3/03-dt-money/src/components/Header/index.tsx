import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import LogoImage from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImage} alt="" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}