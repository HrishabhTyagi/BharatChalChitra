import React from 'react';

interface HeaderComponentProps {
  toggleMenu: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ toggleMenu }) => {
  return (
    <div>
      <button className="openbtn" onClick={toggleMenu}> ☰ </button>
    </div>
  );
};

export default HeaderComponent;
