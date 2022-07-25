import { useEffect, useState } from "react";
import { MdHome } from "react-icons/md";
import { useLocation } from "react-router-dom";
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
import useWindowDimension from "../../hooks/useWindowDimension";

function NavBar() {
  const [openClass, setOpenClass] = useState("");
  const location = useLocation();
  const { innerWidth } = useWindowDimension();

  useEffect(() => {
    if (innerWidth >= 530) {
      setOpenClass("");
    }
  }, [innerWidth]);

  const handleMenuClick = () => {
    setOpenClass((prev) => (prev === "open" ? "" : "open"));
  };

  const getActivePage = (path: string) => {
    if (path === location.pathname) {
      return "active";
    }

    return "";
  };

  return (
    <Nav>
      <LogoContainer>
        <PageLink to="/">
          <PokemonLogo />
        </PageLink>
      </LogoContainer>
      <ul className={openClass}>
        <Li className={getActivePage("/")}>
          <MdHome size={23} />
          <PageLink to="/">Home</PageLink>
        </Li>
        <Li className={getActivePage("/pokedex")}>
          <PokeballIcon />
          <PageLink to="/pokedex">Pokedex</PageLink>
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
