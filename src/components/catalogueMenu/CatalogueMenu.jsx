import React from 'react';
import { useTranslation } from 'react-i18next';
import './CatalogueMenu.css';
import { Link } from 'react-router-dom';
import expandMore from '../../assets/icons/expand_more.png';
import expandLess from '../../assets/icons/expand_less.png';
import { useState } from 'react';

const categories=[
  
]
const CatalogueMenu = () => {
  let [expandSign,setExpandSign]=useState(expandMore);
  const {t}=useTranslation();
  return (
    <div className='catalogue-menu'>

      <Link to="./sale" className='catalogue-menu__link'>{t("sale")}%</Link>
      <Link to="./new" className='catalogue-menu__link'>{t("new")}</Link>
      <Link to="./bestsellers" className='catalogue-menu__link'>{t("bestsellers")}</Link>
      <div className='catalogue-menu__categories'>
        <button type='button' className='catalogue-menu__link' onClick={()=>{expandSign===expandMore?setExpandSign(expandLess):setExpandSign(expandMore)}}>{t("category")} <img src={expandSign} alt="expand"/></button>
        <ul className='catalogue-menu__category-list'>

        </ul>
      </div>
    </div>
  );
};

export default CatalogueMenu;