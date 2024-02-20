import { createBrowserRouter } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Root from './Root';
import NotFound from './pages/NotFound';
import User from './pages/User';
import Error from './components/ErrorComponent';
import Followers from './pages/users/Followers';
/* 
createBrowserRouter

라우팅을 태그형식이 아닌 객체형태로 사용함 

children에 들어가는 path들은 "/"의 하위 집합. 

errorElement: 컴포넌트 충돌이나 잘못된 url접속시(children에 없을 때)에 나오게 됨 (404...)
*/

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
  },
]);

export default Router;

/*

users/ 에 접속했을때는 에러화면을 출력해야하기에, 하위구조의 childrend으로 만들지 않음. 
*/
