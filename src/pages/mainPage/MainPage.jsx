import React from 'react';
import Banner from '../banner/Banner';
import ImageMenu from '../imageMenu/ImageMenu';
import PhotoSliderPC from '../photoSlider/PhotoSlider';
import './MainPage.css';
import man from '../../assets/images/man.jpeg';
import woman from '../../assets/images/woman.png';
import news from '../../assets/images/news.jpg';
import sale from '../../assets/images/sale.jpeg';
import bestsellers from '../../assets/images/bestsellers.jpg';
import { useTranslation } from 'react-i18next';
import IndividualOrder from '../individualOrder/IndividualOrder';

const MainPage = () => {
  const { t } = useTranslation();
  let imageMenuItemsCategories = [{ link: "/woman", photo: woman, text: t("woman") },
  { link: "/man", photo: man, text: t("man") }];
  let imageMenuItemsDeals = [{ link: "/new", photo: news, text: t("new") },
  { link: "/sale", photo: sale, text: t("sale") }, { link: "/bestsellers", photo: bestsellers, text: t("bestsellers") }]
  return (
    <div className='mainpage'>
      <PhotoSliderPC />
      <Banner />
      <ImageMenu
        className="categories"
        menuItems={imageMenuItemsCategories}
      />
      <IndividualOrder />
      <ImageMenu
        className="deals"
        menuItems={imageMenuItemsDeals}
      />
    </div>
  );
};

export default MainPage;