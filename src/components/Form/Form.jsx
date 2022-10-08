import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from "uuid";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import s from "./form.module.scss";

const theme = createTheme();

const Form = () => {
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setFormData({
      nickname: data.get("nickname"),
      real_name: data.get("real_name"),
      origin_description: data.get("origin_description"),
      catch_phrase: data.get("catch_phrase"),
      superpowers: data
        .get("superpowers")
        .split(",")
        .map((el) => el.trim()),
      Images: images,
    });
  };

  const handleImagesChange = (event) => {
    let imagesArr = Array.from(event.target.files);
    let arr = [];
    imagesArr.forEach((file) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        arr.push(reader.result);
        setImages([...images, ...arr]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteImg = (el) => {
    const imageToDelete = images.find((img) => img === el);
    images.splice(images.indexOf(imageToDelete), 1);
  };
  console.log(formData);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add a Superhero
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="nickname"
              label="Superhero nickname"
              name="nickname"
              type="text"
              //   autoComplete="current-password"
              autoFocus
            />
            <TextField
              margin="normal"
              //   required
              fullWidth
              name="real_name"
              label="Superhero real name"
              type="text"
              id="real_name"
              //   autoComplete="current-password"
            />
            <TextField
              margin="normal"
              //   required
              fullWidth
              name="origin_description"
              label="Description"
              type="text"
              id="origin_description"
              //   autoComplete="current-password"
            />
            <TextField
              margin="normal"
              //   required
              fullWidth
              name="superpowers"
              label="Superpowers"
              type="text"
              id="superpowers"
              //   autoComplete="current-password"
            />
            <TextField
              margin="normal"
              //   required
              fullWidth
              name="catch_phrase"
              label="Catch Phrase"
              type="text"
              id="catch_phrase"
              //   autoComplete="current-password"
            />
            <label className={s.fileInputLabel}>
              <input
                onChange={handleImagesChange}
                id="nickname"
                multiple
                style={{ display: "none" }}
                type="file"
                name="Images"
              />
              Hero images
            </label>
            {images.length > 0 ? (
              <Grid style={{ marginTop: "10px" }} container spacing={0}>
                {images.map((el) => (
                  <div className={s.imgWrapper} key={uuidv4()}>
                    <img className={s.imgUnit} alt="superhero" src={el} />
                    <button
                      onClick={() => handleDeleteImg(el)}
                      className={s.deleteImgBtn}
                    >
                      <HighlightOffIcon className={s.svg} />
                    </button>
                  </div>
                ))}
              </Grid>
            ) : (
              <></>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Form;
