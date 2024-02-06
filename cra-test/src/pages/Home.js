import { useState, useEffect } from 'react';

import Movie from '../components/Movie';
import movieAppStyles from '../css/movieAppStyles.module.css';

import Loading from '../components/Loading';

const Home = () => {
  const MOVIEAPIURL = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year';

  const [movies, setMovies] = useState([]);

  //fetch , then 을 개선한 async / await 문법. (비동기)
  const getMovies = async () => {
    const response = await fetch(MOVIEAPIURL);

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  c;
  return (
    <section>
      {loading ? (
        <h1>영화 정보 받아오는 중 ....</h1>
      ) : (
        <div className={movieAppStyles.bl_movieList}>
          {movies.map((currentMovie) => {
            return (
              <Movie
                key={currentMovie.id}
                id={currentMovie.id}
                poster={currentMovie.medium_cover_image}
                title={currentMovie.title}
                genres={currentMovie.genres}
                summary={currentMovie.summary}
              />
            );
          })}{' '}
        </div>
      )}
    </section>
  );
};

export default Home;
