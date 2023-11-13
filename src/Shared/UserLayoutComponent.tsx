import { useState } from 'react';
import ContainerComponent from './ContainerComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MenuComponent from './MenuComponent';

import './UserLayout.css';

const UserLayoutComponent = () => {

  return (
    <>
      <div className="grid-container">
        <header className="header"><HeaderComponent /></header>
        <div className="navigation"><MenuComponent /></div>
        <main className="container"><ContainerComponent /></main>
        <footer className="footer"><FooterComponent /></footer>
      </div>
    </>
  )
};

export default UserLayoutComponent;