import Grid from "@mui/material/Grid";
import SuperheroCard from "./SuperheroCard/SuperheroCard";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../usePagination.js";
import { useState } from "react";
import s from "./superheroGrid.module.scss";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SuperheroesGrid = () => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(cards.length / PER_PAGE);
  const _DATA = usePagination(cards, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {_DATA.currentData().map((card) => (
          <SuperheroCard key={card} />
        ))}
      </Grid>
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
