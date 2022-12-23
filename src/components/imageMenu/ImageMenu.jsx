import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../linkButton/LinkButton';
import './ImageMenu.css';
const ImageMenu = (props) => {
  return (
    <ul className={`image-menu ${props.className}`}>
      {
        props.menuItems.map((item, i) => {
          return (
            <li key={i}>
              <Link to={item.link}>
                <img className="image-menu__image" src={item.photo} alt="" />
                <div className='image-menu__text'>{item.text}</div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
};

export default ImageMenu;