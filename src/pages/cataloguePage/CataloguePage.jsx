import React from 'react';
import Catalogue from '../../components/catalogue/Catalogue';
import CatalogueMenu from '../../components/catalogueMenu/CatalogueMenu';
import ItemCard from '../../components/itemCard/ItemCard';
import './CataloguePage.css';
const CataloguePage = (props) => {
  return (
    <div className='catalogue-page'>
      <CatalogueMenu/>
      <Catalogue items={props.for}/>
    </div>
  );
};

export default CataloguePage;