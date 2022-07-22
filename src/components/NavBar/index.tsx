import { Nav, PageLink, PageName } from "./styles";

function NavBar() {
  return (
    <Nav>
      <PageName href="/">Pokedex</PageName>
      <ul>
        <li>
          <PageLink href="/">Home</PageLink>
        </li>
        <li>
          <PageLink href="/pokedex">Pokedex</PageLink>
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
