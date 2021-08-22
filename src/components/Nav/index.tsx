import React from 'react';
import { data } from './data';
import { NavTypes } from './types';
import './styles.scss';

const Nav = ({ areLinksVisible, isMenuOpen }: NavTypes): JSX.Element => (
  <div className={`nav nav--${isMenuOpen ? 'down' : 'hidden'}`}>
    <div className="nav__container">
      <ul className={`nav__list__first ${areLinksVisible ? 'nav--down' : ''}`}>
        {data.links.map(({ children, name }, index) => (
          <li className={children ? 'nav__arrow' : ''} key={index}>
            {name}
            {children ? (
              <ul className="nav__list__second">
                {children.map(({ name: innerName }, innerIndex) => (
                  <li key={innerIndex}>{innerName}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export { Nav };
