import React, { useState, useEffect } from 'react';
import photo1 from '../../images/photo1.png';
import photo2 from '../../images/photo2.png';
import photo3 from '../../images/photo3.png';
import photo4 from '../../images/photo4.png';
import 'react-slideshow-image/dist/styles.css';
import './PhotoSlider.css';
import { Slide } from 'react-slideshow-image';
let photos = [photo1, photo2, photo3, photo4];
const PhotoSliderPC = (props) => {
  return (
    <div className='photoslider'>
      <div className='photoslider__photos'>
        <Slide
          slidesToScroll={1}
          slidesToShow={2}
          indicators={true}
          arrows={false}
          autoplay={true}
          infinite={true}
          duration={5000}
          transitionDuration={1000}
          >
            {photos.map((photo,i)=>{
              return (
                <div key={i} className='each-slide-effect'>
                  <div ><img className="photoslider__photo" src={photo}/></div>
                </div>
              )
            })}
        </Slide>
      </div>
    </div>
  );
};

export default PhotoSliderPC;