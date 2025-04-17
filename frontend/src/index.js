import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './landing_page/signup/Signup';
import ProductsPage from './landing_page/products/ProductsPage';
import SupportPage from './landing_page/support/SupportPage';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Homepage from './landing_page/home/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound from './landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />

    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
    <Footer />
    
  </BrowserRouter>
);


