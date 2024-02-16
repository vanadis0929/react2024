import { createBrowserRouter } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Root from './Root';

/* 
createBrowserRouter

라우팅을 태그형식이 아닌 객체형태로 사용함 

children에 들어가는 path들은 "/"의 하위 집합. 
*/

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default Router;
