import React from 'react';
import { useTranslation } from 'react-i18next';
import './ItemCard.css';

const ItemCard = (props) => {
  const { t } = useTranslation();
  return (
    <div className='item-card' data-id={props.itemInfo.id}>
      <div className='item-card__image-container'>
        <img src={props.itemInfo.image} alt={props.itemInfo.name[props.lang]} />
      </div>
      <p>{props.itemInfo.name[props.lang]}</p>
      <p>{`${props.itemInfo.price[props.lang]} ${t('currency')}`}</p>
      <ul className='item-card__color-list'>
        {
          props.itemInfo.colors.map((color,i)=>{
            return (
              <li key={i} className="item-card__color" style={{backgroundColor:"#"+color}}></li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default ItemCard;