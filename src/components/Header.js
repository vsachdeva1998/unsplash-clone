import React from 'react';

import './Header.css';

const Header = (props) => (
  <div className="header">
    <div className="content-container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Visual Collage',
  subtitle: 'Photos for Everyone',
};

export default Header;
