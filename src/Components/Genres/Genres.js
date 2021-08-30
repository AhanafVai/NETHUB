import { Chip, createMuiTheme, ThemeProvider } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Genres.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const Genres = ({
  type,
  selectedGenres,
  genres,
  setSelectedGenres,
  setGenres,
  setPage,
}) => {
  // add & remove genres
  const handleAdd = (genre) => {
    // addEveryThing then add what you have selected
    setSelectedGenres([...selectedGenres, genre]);
    // remove from genres
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    // remove from selected genres
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    // adding to genre
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenre();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="genres">
      {genres &&
        genres.map((genre) => (
          <Helmet key={genre.id}>
            <meta name="description" content="Genres in the content" />
            <meta name="keywords" content={genre.name} />
          </Helmet>
        ))}

      <ThemeProvider theme={darkTheme}>
        {selectedGenres &&
          selectedGenres.map((genre) => (
            <Chip
              style={{ margin: ".2rem", fontWeight: "700" }}
              label={genre.name}
              clickable
              size="small"
              color="primary"
              key={genre.id}
              onDelete={() => handleRemove(genre)}
              variant="outlined"
            />
          ))}

        {genres &&
          genres.map((genre) => (
            <Chip
              key={genre.id}
              style={{ margin: ".2rem", fontWeight: "700" }}
              size="small"
              label={genre.name}
              clickable
              variant="outlined"
              onClick={() => handleAdd(genre)}
            />
          ))}
      </ThemeProvider>
    </div>
  );
};

export default Genres;
