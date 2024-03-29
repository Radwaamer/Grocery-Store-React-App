import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/main.css';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';

import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/main/Layout';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import About from './pages/about/About';
import Review from './pages/review/Review';
import ShoppingContext from './context/ShoppingContext';
import { useState } from 'react';

function App() {
  const [card,setCard]=useState([]);
  return (
    <ShoppingContext.Provider value={{card,setCard}}>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="About" element={<About />} />
            <Route path="Review" element={<Review />} />
          </Route>
        </Routes>
      </>
    </ShoppingContext.Provider>
  );
}

export default App;
