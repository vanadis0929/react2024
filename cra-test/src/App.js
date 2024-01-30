import { useState, useEffect, useRef } from 'react';

import Button from './components/Button';

import movieAppStyles from './css/movieAppStyles.module.css';

function App() {
  const MOVIEAPIURL = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year';

  const [loading, setLoading] = useState(true);
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

  return (
    <section>
      {loading ? (
        <h1>영화 정보 받아오는 중 ....</h1>
      ) : (
        <ul className={movieAppStyles.bl_movieList}>
          {movies.map((current) => {
            return (
              <li key={current.id}>
                <figure>
                  <img src={current.medium_cover_image} alt={current.title} />
                  <figcaption> {current.title}</figcaption>
                </figure>
                <dl>{/* 부수적인 정보 / 링크(링크는 fipcation에) */}</dl>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default App;
