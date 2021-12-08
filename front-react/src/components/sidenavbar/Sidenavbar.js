import React from 'react';
import './Sidenavbar.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import jogaLogo from './assets/JOGA_LOGO.svg';

export const Sidenavbar = () => {
  const handleLanguage = () => {
    console.log('cambio idioma');
  };
  return (
    <div>
      <div className="sidebargames">
        <div className="logocontainer">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={jogaLogo} alt="Logo Joga" />
          </Link>
        </div>
        <ul className="nav_list">
          <li>
            <Link to="/home">
              <i className="fas fa-home" />
              <span className="links-name">
                <FormattedMessage id="home" />
              </span>
            </Link>
          </li>
          <li>
            <Link to="/juegos">
              <i className="fas fa-gamepad" />
              <span className="links-name">
                <FormattedMessage id="games" />
              </span>
            </Link>
          </li>
          <li>
            <Link to="/lfgs">
              <i className="fas fa-users" />
              <span className="links-name">
                <FormattedMessage id="LFGs" />
              </span>
            </Link>
          </li>
          <li>
            <Link to="/chats">
              <i className="fas fa-comments" />
              <span className="links-name">
                <FormattedMessage id="chats" />
              </span>
            </Link>
          </li>
          <li>
            <Link to="/stats">
              <i className="fas fa-chart-bar" />
              <span className="links-name">
                <FormattedMessage id="stats" />
              </span>
            </Link>
          </li>
          {/* <li className="bottom-sidenavbar">
            <div
              className="sidenavbar-change-language"
              role="button"
              tabIndex="0"
              onClick={() => handleLanguage()}
              onKeyPress={handleLanguage()}
            >
              <i className="fas fa-globe" />
              <span className="links-name">
                <FormattedMessage id="changelang" />
              </span>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
