import { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header/Herder.jsx";
import HeroUnit from "./components/Hero/Hero.jsx";
import SuperheroesGrid from "./components/SuperheroesGrid/SuperheroesGrid.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ModalUnit from "./components/ModalUnit/ModalUnit.jsx";

const theme = createTheme();

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <HeroUnit openModal={handleOpenModal} />
        <SuperheroesGrid />
        <ModalUnit isOpen={isOpen} closeModal={handleCloseModal} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
