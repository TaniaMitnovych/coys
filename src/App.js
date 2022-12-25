import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import BrandName from './components/brandName/BrandName';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavList from './components/navList/NavList';
import './reset.css';
import './App.css';
import PhotoSliderPC from './components/photoSlider/PhotoSlider';
import Layout from './components/layout/Layout';
import { Routes,Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
const languages=[
  {value:'en', text: 'EN'},
  {value:'uk', text: 'UK'}
]
function App() {
  const {t}=useTranslation();
  const [lang,setLang]=useState('en');

  const handleLangChange=(event)=>{
    setLang(event.target.value);
    let location="http://localhost:3000/";
    window.location.replace(location+'?lng='+event.target.value);
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/*
sass ./src/components/brandName/BrandName.scss ./src/components/brandName/BrandName.css 
*/