import React from 'react';
import LetterC from './letters/LetterC';
import LetterO from './letters/LetterO';
import LetterY from './letters/LetterY';
import LetterS from './letters/LetterS';
import './BrandName.css';

const BrandName = (props) => {
  // let newClassName='brand-name';
  // if(props.size==='small'){
  //   newClassName+='_small';
  // }else if(props.size==="large"){
  //   newClassName+='_large';
  // }
  return (
    <div className='brand-name'>
      <LetterC/>
      <LetterO/>
      <LetterY/>
      <LetterS/>
    </div>
  );
};

export default BrandName;