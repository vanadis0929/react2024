import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../components/Button';

// import propTypes from 'prop-types';

const Detail = () => {
  const MOVIEDETAILAPIURL = `https://yts.mx/api/v2/movie_details.json/?movie_id=`;
  const movieId = useParams();
  const [detail, setDetail] = useState([]);

  const onclickBack = (event) => {
    window.history.back(-1);
  };

  //fetch , then 을 개선한 async / await 문법. (비동기)
  const getMovieDetail = async () => {
    const response = await fetch(`${MOVIEDETAILAPIURL}${movieId.id}`);

    const json = await response.json();
    setDetail(json.data.movie);
    console.log(detail);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <article>
      <h1>{detail.title}</h1>
      <figure>
        <img src={detail.large_cover_image} alt="" />
      </figure>

      <dl>
        <dt>연도</dt>
        <dd>{detail.year}</dd>
        <dt>장르</dt>
        <dd>
          {detail.genres
            ? detail.genres.map((genre) => {
                return <div key={genre}>{genre}</div>;
              })
            : null}
        </dd>
      </dl>
      <Button text="뒤로가기" onclick={onclickBack} />
    </article>
  );
};
export default Detail;
