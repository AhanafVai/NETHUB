import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import SingleContent from "../../Components/SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [contents, setContents] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContents(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <>
      <section className="page-title">Trending</section>

      <div className="trending">
        {contents &&
          contents.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </>
  );
};

export default Trending;
