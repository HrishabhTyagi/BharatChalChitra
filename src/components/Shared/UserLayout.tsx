import { useState } from 'react';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

import './UserLayout.css';

const UserLayout = () => {

  return (
    <>
      <div className="grid-container">
        <header className="header"><Header /></header>
        <div className="navigation"><Menu /></div>
        <main className="container"><Container /></main>
        <footer className="footer"><Footer /></footer>
      </div>
    </>
  )
};

export default UserLayout;