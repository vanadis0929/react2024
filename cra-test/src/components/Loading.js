import styled from 'styled-components';

import loadingAnimation from '../asset/loading.svg';

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  place-items: center;
  place-content: center;
  flex-direction: column;
  gap: 20px;
  font-size: 3rem;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(21px);

  img {
    width: 300px;
    display: block;
  }
`;

const Loading = () => {
  return (
    <Container>
      <img src={loadingAnimation} alt="" /> 불러오는 중 ....
    </Container>
  );
};

export default Loading;
