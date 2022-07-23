import { useEffect, useState } from "react";
import {
  Li,
  LogoContainer,
  Menu,
  MenuLine,
  Nav,
  PageLink,
  PokeballIcon,
  PokemonLogo,
} from "./styles";
import { MdHome } from "react-icons/md";
import useWindowDimension from "../../hooks/useWindowDimension";

function NavBar() {
  const [openClass, setOpenClass] = useState("");
  const { innerWidth } = useWindowDimension();

  useEffect(() => {
    if (innerWidth >= 530) {
      setOpenClass("");
    }
  }, [innerWidth]);

  const handleMenuClick = () => {
    setOpenClass((prev) => (prev === "open" ? "" : "open"));
  };

  return (
    <Nav>
      <LogoContainer>
        <PokemonLogo />
      </LogoContainer>
      <ul className={openClass}>
        <Li className="active">
          <MdHome size={23} />
          <PageLink href="/">Home</PageLink>
        </Li>
        <Li>
          <PokeballIcon />
          <PageLink href="/pokedex">Pokedex</PageLink>
        </Li>
      </ul>

      <Menu onClick={handleMenuClick} className={openClass}>
        <MenuLine />
        <MenuLine />
        <MenuLine />
      </Menu>
    </Nav>
  );
}

export default NavBar;
