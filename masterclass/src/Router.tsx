import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
