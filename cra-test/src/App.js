import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

// react-router-dom 6버전의 차이점
/*
  Switch > Routes 로 변경 
  Route 컴포넌트 하위가 없고 불러올 컴포넌트를 element prop으로 받아옴
*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
