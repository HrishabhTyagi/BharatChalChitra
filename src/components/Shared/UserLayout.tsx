import { useState } from 'react';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

import './UserLayout.css';

import './UserLayout.css';

const UserLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="grid-container">
      <header className="header">
        <Header toggleMenu={toggleMenu} />
      </header>
      <div className={isMenuOpen ? 'navigation' : 'navigation hidden'}>
        <Menu isMenuOpen={isMenuOpen} />
      </div>
      <main className="container">
        <Container />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default UserLayout;
