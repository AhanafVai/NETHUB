import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import Genres from "../../Components/Genres/Genres";
import SingleContent from "../../Components/SingleContent/SingleContent";
import useGenre from "../../Hooks/UseGenre";

const Series = () => {
  const [page, setPage] = useState(1);
  const [contents, setContents] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreForURL = useGenre(selectedGenres);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
    );

    setContents(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreForURL]);
  return (
    <>
      <div className="page-title">TV Series</div>
      <Helmet>
        <title>Explore TV Series</title>
        <meta name="description" content="Explore new TV Series with genres" />
        <meta
          name="keywords"
          content="Movies, Tv Series, Search Movies,Search Tv Series"
        />
      </Helmet>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        genres={genres}
        setSelectedGenres={setSelectedGenres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <section className="trending">
        {contents &&
          contents.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </section>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </>
  );
};

export default Series;
