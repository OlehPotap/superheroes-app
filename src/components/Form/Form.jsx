import { useEffect, useState } from "react";
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

import { useDispatch } from "react-redux";
// import { selectIsLoading } from "../../redux/selectors";
import { addHero, updateHero } from "../../redux/operations";

const theme = createTheme();

const Form = ({ isEditing, superheroEditInfo }) => {
  const [values, setValues] = useState({
    nickname: "",
    real_name: "",
    origin_description: "",
    catch_phrase: "",
    superpowers: "",
    images: [],
  });
  useEffect(() => {
    isEditing
      ? setValues({
          // _id: superheroEditInfo._id,
          nickname: superheroEditInfo.nickname,
          real_name: superheroEditInfo.real_name,
          origin_description: superheroEditInfo.origin_description,
          catch_phrase: superheroEditInfo.catch_phrase,
          superpowers: superheroEditInfo.superpowers,
          images: superheroEditInfo.images,
        })
      : setValues({
          nickname: "",
          real_name: "",
          origin_description: "",
          catch_phrase: "",
          superpowers: "",
          images: [],
        }); // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    isEditing
      ? dispatch(
          updateHero({
            id: superheroEditInfo._id,
            nickname: data.get("nickname"),
            real_name: data.get("real_name")
              ? data.get("real_name")
              : "The hero's identity has yet to be revealed.",
            origin_description: data.get("origin_description")
              ? data.get("origin_description")
              : "Nothing is known about the hero yet",
            catch_phrase: data.get("catch_phrase")
              ? data.get("catch_phrase")
              : "Hero doesn't really talk (thinks he is some kind of hot shit or something)",
            superpowers: data.get("superpowers")
              ? data
                  .get("superpowers")
                  .split(",")
                  .map((el) => el.trim())
              : ["Hero's abilities are still unknown"],
            images: values.images,
          })
        )
      : dispatch(
          addHero({
            nickname: data.get("nickname"),
            real_name: data.get("real_name")
              ? data.get("real_name")
              : "The hero's identity has yet to be revealed.",
            origin_description: data.get("origin_description")
              ? data.get("origin_description")
              : "Nothing is known about the hero yet",
            catch_phrase: data.get("catch_phrase")
              ? data.get("catch_phrase")
              : "Hero doesn't really talk (thinks he is some kind of hot shit or something)",
            superpowers: data.get("superpowers")
              ? data
                  .get("superpowers")
                  .split(",")
                  .map((el) => el.trim())
              : ["Hero's abilities are still unknown"],
            images: values.images,
          })
        );
    // setFormData();
  };

  const handleImagesChange = (event) => {
    let imagesArr = Array.from(event.target.files);
    let arr = [];
    imagesArr.forEach((file) => {
      let reader = new FileReader();
      reader.onloadend = () => {
        arr.push(reader.result);
        setValues({ ...values, images: [...values["images"], ...arr] });
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteImg = (el) => {
    const imageToDelete = values["images"].find((img) => img === el);
    const newImages = [...values["images"]];
    newImages.splice(newImages.indexOf(imageToDelete), 1);
    setValues({ ...values, images: [...newImages] });
  };

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
              value={values.nickname}
              onChange={handleChange}
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
              value={values.real_name}
              onChange={handleChange}
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
              value={values.origin_description}
              onChange={handleChange}
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
              value={values.superpowers}
              onChange={handleChange}
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
              value={values.catch_phrase}
              onChange={handleChange}
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
                id="images"
                multiple
                style={{ display: "none" }}
                type="file"
                name="Images"
              />
              Hero images
            </label>
            {values["images"].length > 0 ? (
              <Grid style={{ marginTop: "10px" }} container spacing={0}>
                {values["images"].map((el) => (
                  <div className={s.imgWrapper} key={uuidv4()}>
                    <img className={s.imgUnit} alt="superhero" src={el} />
                    <button
                      type="button"
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
