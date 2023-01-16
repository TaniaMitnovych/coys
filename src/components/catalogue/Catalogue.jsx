import React from 'react';
import ItemCard from '../itemCard/ItemCard';
import { useTranslation } from 'react-i18next';
import './Catalogue.css';
const Catalogue = (props) => {
  const {t}=useTranslation();
  return (
    <div className='catalogue'>
      <div className='catalogue__list'>
        {
          props.items.map((item, i) => {
            return (
              <ItemCard key={i} itemInfo={item} lang={window.localStorage.getItem("lang")} />
            )
          })
        }
      </div>
      <button className="catalogue__button" type="button">{t('seeMore')}</button>
    </div>
  );
};

export default Catalogue;