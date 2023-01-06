import React from 'react';
import BrandName from '../brandName/BrandName';
import NavList from '../navList/NavList';
import './Header.css';
import { useTranslation } from 'react-i18next';
import searchIcon from '../../assets/logo/search_icon.svg';
import bagIcon from '../../assets/logo/bag_icon.svg';
import menuIcon from '../../assets/logo/menu_icon.svg';
import LanguagePicker from '../languagePicker/LanguagePicker';

const Header = (props) => {
  const {t}=useTranslation();
  return (
    <div className='header' id="header">
      <button type='button' className='header__button header__menu-button'><img src={menuIcon} alt='menu button'/></button>
      <NavList/>
      <BrandName/>
      <a href='tel:+380971928500'>+38 097 192 85 00</a>
      <a href='#'>{t('account')}</a>
      <button type='button' className='header__button header__search-button'><img src={searchIcon} alt='search button'/></button>
      <button type='button' className='header__button header__bag-button'><img src={bagIcon} alt='bag button'/></button>
      <LanguagePicker/>
    </div>
  );
};

export default Header;