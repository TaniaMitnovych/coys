import React from 'react';
import Banner from '../banner/Banner';
import PhotoSliderPC from '../photoSlider/PhotoSlider';
import './MainPage.css';
const MainPage = () => {
  return (
    <div className='mainpage'>
      <PhotoSliderPC/>
      <Banner/>
    </div>
  );
};

export default MainPage;