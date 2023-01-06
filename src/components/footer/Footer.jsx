import React from 'react';
import { useTranslation } from 'react-i18next';
import instagramLogo from '../../assets/logo/instagram_logo.svg';
import facebookLogo from '../../assets/logo/facebook_logo.svg';
import arrowTop from '../../assets/logo/arrow_top.svg';
import './Footer.css';

const Footer = () => {
  const {t}=useTranslation();
  return (
    <div className='footer'>
      <ul className='footer__social-list'>
        <li className='footer__social-item'><a href="https://www.instagram.com/coys_brand/"><img src={instagramLogo}/></a></li>
        <li className='footer__social-item'><a href="https://www.facebook.com/coysukraine/"><img src={facebookLogo}/></a></li>
      </ul>

      <ul className='footer__usefull-links-list'>
        <li className='footer__usefull-links-item'><a href=''>{t('maintenance')}</a></li>
        <li className='footer__usefull-links-item'><a href=''>{t('aboutBrand')}</a></li>
        <li className='footer__usefull-links-item'><a href=''>{t('lookbooks')}</a></li>
      </ul>

      <a className='footer__to-top-button' href="#header"><img src={arrowTop}/></a>
    </div>
  );
};

export default Footer;