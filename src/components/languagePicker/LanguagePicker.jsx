import React,{useState, useEffect, useRef, useLayoutEffect} from 'react';
import './LanguagePicker.css';

const LanguagePicker = (props) => {
  const [lang,setLang]=useState('en');
  const en=useRef(null);
  const uk=useRef(null);

  useEffect(() => {
    let lng=window.sessionStorage.getItem("lang");
    setLang(lng);
    if(lang==='en'){
      en.current.checked=true;
      uk.current.checked=false;
    }else{
      uk.current.checked=true;
      en.current.checked=false;
    }
  });

  const handleLangChange=(event)=>{
    setLang(event.target.value);
    window.sessionStorage.setItem("lang", event.target.value);
    let location="http://localhost:3000/";
    window.location.replace(location+'?lng='+event.target.value);
  }
  return (
    <div lang={lang} className='language-picker'>
      <input name='language' type='radio' id='en' value='en' onChange={handleLangChange} ref={en} checked={true}/>
      <label htmlFor='en'>EN</label>

      <input name='language' type='radio' id='uk' value='uk' onChange={handleLangChange} ref={uk} checked={false}/>
      <label htmlFor='uk'>UK</label>
    </div>
  );
};

export default LanguagePicker;