import { Link, useNavigate } from 'react-router-dom';

import { styled } from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  inset: 0 0 auto 0;
  border-bottom: 1px solid #000;
  box-shadow: 0 2px 5px #555;
  margin-bottom: 50px;
`;

const Header = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate('/about');
  };
  return (
    <HeaderContainer>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          {/* <Link to={'/about'}>about</Link> */}
          <button type="button" onClick={onAboutClick}>
            about{' '}
          </button>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
