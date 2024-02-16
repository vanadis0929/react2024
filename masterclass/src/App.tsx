import { Fragment } from 'react';
import Router from './Router';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`



`;

function App() {
  return (
    <Fragment>
      <Global />
      <Router />
    </Fragment>
  );
}

export default App;
