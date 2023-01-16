import React from 'react';
import Catalogue from '../../components/catalogue/Catalogue';
import CatalogueMenu from '../../components/catalogueMenu/CatalogueMenu';
import ItemCard from '../../components/itemCard/ItemCard';
import forWomen from '../../women.json';
import './CataloguePage.css';
const CataloguePage = () => {
  return (
    <div className='catalogue-page'>
      <CatalogueMenu/>
      <Catalogue items={forWomen}/>
    </div>
  );
};

export default CataloguePage;