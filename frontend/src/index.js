import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import{BrowserRouter,Routes,Route}from 'react-router-dom';
import HomePage from './landing_page/home/HomePage';
import  SignUp from'./landing_page/signup/SignUp';
import About from './landing_page/about/AboutPage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import Product from './landing_page/products/ProductPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route  path='/' element={<HomePage/>}/>
  <Route  path='/SignUp' element={<SignUp/>}/>
  <Route  path='/About' element={<About/>}/>
  <Route  path='/Pricing' element={<Pricing/>}/>
  <Route  path='/Product' element={<Product/>}/>
  <Route path='/Support' element={<Support/>}/>
  <Route path='*' element={<NotFound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
);

