import React, { useEffect, useState } from 'react';
import { NavButton } from 'components/Button';
import { Nav } from 'components/Nav';
import './styles.scss';

const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setTimeout(() => {
        setMenuOpen(false);
      }, 150);
      setShowLinks(false);
    } else {
      setTimeout(() => {
        setShowLinks(true);
      }, 300);
      setMenuOpen(true);
    }
  };

  const closeMenuOnScroll = () => {
    if (menuOpen) {
      setTimeout(() => {
        setMenuOpen(false);
      }, 150);
      setShowLinks(false);
    }
    return null;
  };

  useEffect(() => {
    window.addEventListener('scroll', closeMenuOnScroll);
  });

  return (
    <div className="header__section">
      <div className="header">
        <div className="header__container">
          <div className="header__logo"></div>
          <NavButton onClick={toggleMenu} isMenuOpen={menuOpen}>
            Main Menu
          </NavButton>
        </div>
      </div>
      <Nav isMenuOpen={menuOpen} areLinksVisible={showLinks} />
    </div>
  );
};

export { Header };
