import { useState, useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header/Herder.jsx";
import HeroUnit from "./components/Hero/Hero.jsx";
import SuperheroesGrid from "./components/SuperheroesGrid/SuperheroesGrid.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ModalUnit from "./components/ModalUnit/ModalUnit.jsx";

import { useDispatch } from "react-redux";
import { getAllHeroes } from "./redux/operations";

const theme = createTheme();

export default function App() {
  const [modalOptions, setModalOptions] = useState({
    card: {},
    isOpen: false,
    isEditing: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!modalOptions.isOpen) {
      dispatch(getAllHeroes());
    }
  }, [dispatch, modalOptions]);

  const handleOpenModal = () =>
    setModalOptions({ ...modalOptions, isOpen: true, isEditing: false });
  const handleOpenModalandEditHero = (card) => {
    setModalOptions({ card: card, isOpen: true, isEditing: true });
  };
  const handleCloseModal = () =>
    setModalOptions({ ...modalOptions, isOpen: false, isEditing: false });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <HeroUnit openModal={handleOpenModal} />
        <SuperheroesGrid openModal={handleOpenModalandEditHero} />
        <ModalUnit modalOptions={modalOptions} closeModal={handleCloseModal} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
