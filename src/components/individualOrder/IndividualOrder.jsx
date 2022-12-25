import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../logo/coys_logo_colorline.svg';
import './IndividualOrder.css';
const IndividualOrder = () => {
  const { t } = useTranslation();
  return (
    <div className='individual-order'>
      <h2>{t('individualOrders')}</h2>
      <hr />
      <div className='individual-order__content'>
        <img src={logo} alt="logo" />
        <p className='individual-order__about'>{`${t('aboutIndividualP1')}. ${t('aboutIndividualP2')}`}</p>
        <div className='individual-order__form'>
          <p>{t('individualInstruction')}</p>
          <div className='individual-order__input'>
            <input type="text" placeholder='+___(__)___-__-__' />
            <button type="button">{t('order')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualOrder;