import { useState, useEffect } from 'react';

// import propTypes from 'prop-types';

const Detail = ({ id }) => {
  const MOVIEDETAILAPIURL = `https://yts.mx/api/v2/movie_details.json/?movie_id=59455`;
  const [detail, setDetail] = useState([]);
  const [pathname, setPathname] = useState('');

  //fetch , then 을 개선한 async / await 문법. (비동기)
  const getDetail = async () => {
    const response = await fetch(MOVIEDETAILAPIURL);

    const json = await response.json();
    setDetail(json.data.movie);
    console.log(detail);
    console.log(id);
  };

  useEffect(() => {
    setPathname(window.location.pathname[window.location.pathname.length - 1]);
    console.log(pathname);
  }, []);

  getDetail();
  console.log(id);

  alert('ddd');

  return <h1>상세페이지</h1>;
};
export default Detail;
