import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Products from './pages/Products';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<App/>} />
          <Route path='shop' element={<Shop/>} />
          <Route path='aboutus' element={<AboutUs/>} />
          <Route path='shop/:id' element={<Products/>} />
          <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
