/* app/javascripts/components/_header.jsx */

import React from 'react'
import logo from '../images/logo.svg';
import '../packs/main';
// importing css from asset pipeline instead of from webpacker
// import '../css/main.css';

// Page Header
class Header extends React.Component {
  render() {
    return (
      <header className="appHeader">
        <div className="appLogo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="appTitle">
          <h1 className="title">Job Search Logger</h1>
        </div>
      </header>
    )
  }
}

export default Header;
