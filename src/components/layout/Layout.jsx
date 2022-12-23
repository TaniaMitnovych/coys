import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Layout;