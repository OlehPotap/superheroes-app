import Grid from "@mui/material/Grid";
import SuperheroCard from "./SuperheroCard/SuperheroCard";
import Container from "@mui/material/Container";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SuperheroesGrid = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <SuperheroCard key={card} />
        ))}
      </Grid>
    </Container>
  );
};

export default SuperheroesGrid;
