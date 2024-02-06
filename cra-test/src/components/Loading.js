import { useState } from 'react';
import propTypes from 'prop-types';

const Loading = ({ isLoading }) => {
  const [loading, setLoading] = useState(true);

  return <h1>{Loading ? '로딩중' : null}</h1>;
};

Loading.propTypes = {
  setLoading: propTypes.func.isRequired,
};

export default Loading;
