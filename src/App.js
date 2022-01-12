import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import "react-image-gallery/styles/css/image-gallery.css";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
