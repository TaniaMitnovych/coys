import React from 'react';
import logo from '../../assets/logo/coys_logo_white.svg';
import './Banner.css';
import { useTranslation } from 'react-i18next';
const Banner = () => {
  const {t}=useTranslation();
  return (
    <div className='banner'>
      <h1 className='banner__header'>Colors Of Your Soul</h1>
      <p className='banner__text'>{t('about')}</p>
      <img className="banner__logo" src={logo} alt="logo"/>
    </div>
  );
};

export default Banner;