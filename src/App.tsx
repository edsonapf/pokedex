import { useMemo } from "react";
import { ThemeProvider } from "styled-components";
import PokedexProvider from "./context/PokedexContext";
import CustomRoutes from "./CustomRoutes";
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
      <CustomRoutes />
    </ThemeProvider>
  );
}

function App() {
  return (
    <PokedexProvider>
      <AppWithTheme />
    </PokedexProvider>
  );
}

export default App;
