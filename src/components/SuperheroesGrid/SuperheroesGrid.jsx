import Grid from "@mui/material/Grid";
import SuperheroCard from "./SuperheroCard/SuperheroCard";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import usePagination from "../../Hooks/usePagination.js";
import { useState } from "react";
import s from "./superheroGrid.module.scss";

import { useSelector } from "react-redux";
import { selectAllHeroes, selectIsLoading } from "../../redux/selectors";

const SuperheroesGrid = ({ openModal }) => {
  const superheroes = useSelector(selectAllHeroes);
  const isLoading = useSelector(selectIsLoading);

  let [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(superheroes.length / PER_PAGE);
  const _DATA = usePagination(superheroes, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {isLoading ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={4}>
          {_DATA.currentData().map((card) => (
            <SuperheroCard key={card._id} card={card} openModal={openModal} />
          ))}
        </Grid>
      )}

      <Pagination
        className={s.paginationGrid}
        count={count}
        page={page}
        shape="rounded"
        onChange={handleChange}
      />
    </Container>
  );
};

export default SuperheroesGrid;
