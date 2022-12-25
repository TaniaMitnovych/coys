import React from 'react';
import Banner from '../banner/Banner';
import ImageMenu from '../imageMenu/ImageMenu';
import PhotoSliderPC from '../photoSlider/PhotoSlider';
import './MainPage.css';
import man from '../../images/man.jpeg';
import woman from '../../images/woman.png';
import { useTranslation } from 'react-i18next';
import IndividualOrder from '../individualOrder/IndividualOrder';

const MainPage = () => {
  const { t } = useTranslation();
  let imageMenuItemsCategories = [{ link: "/woman", photo: woman, text: t("woman") },
  { link: "/man", photo: man, text: t("man") }];
  return (
    <div className='mainpage'>
      <PhotoSliderPC />
      <Banner />
      <ImageMenu
        className="categories"
        menuItems={imageMenuItemsCategories}
      />
      <IndividualOrder/>
    </div>
  );
};

export default MainPage;