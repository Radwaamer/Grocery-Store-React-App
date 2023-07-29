import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/main.css';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';

import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/main/Layout';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
