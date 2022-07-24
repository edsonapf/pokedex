import PokedexProvider from "./context/PokedexContext";
import CustomRoutes from "./CustomRoutes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <PokedexProvider>
      <GlobalStyle />
      <ToastContainer />
      <CustomRoutes />
    </PokedexProvider>
  );
}

export default App;
