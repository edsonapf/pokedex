import { Li, LogoImg, Nav, PageLink } from "./styles";
import pokemonLogo from "../../assets/logo/pokemon.svg";

function NavBar() {
  return (
    <Nav>
      <LogoImg src={pokemonLogo} alt="Pokemon logo" />
      <ul>
        <Li className="active">
          <PageLink href="/">Home</PageLink>
        </Li>
        <Li>
          <PageLink href="/pokedex">Pokedex</PageLink>
        </Li>
      </ul>
    </Nav>
  );
}

export default NavBar;
