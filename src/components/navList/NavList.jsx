import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NavList.css';
import { Link } from 'react-router-dom';
const NavList = () => {
  const {t}=useTranslation();
  return (
      <ul className='nav-list'>
        <li className="nav-list__item">
          <Link to="/woman">
          {t('woman')}
          </Link>
          </li>
        <li className="nav-list__item"><a>{t('man')}</a></li>
        <li className="nav-list__item"><a>{t('contacts')}</a></li>
      </ul>
  );
};

export default NavList;