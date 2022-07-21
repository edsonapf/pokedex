import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import PokemonGrid from "./components/PokemonGrid";
import useLocalStorage from "./hooks/useLocalStorage";
import { GlobalStyle } from "./styles/global";
import themes from "./styles/themes";

type Theme = "dark" | "light";

function AppWithTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prev: Theme): Theme => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <h1>Pokedex</h1>
      <PokemonGrid />
      <button onClick={handleChangeTheme}>
        {theme === "dark" ? "light" : "dark"}
      </button>
    </ThemeProvider>
  );
}

function App() {
  return <AppWithTheme />;
}

export default App;
