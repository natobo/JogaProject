import React from 'react';
import './Sidenavbar.scss';
import { Link } from 'react-router-dom';
import jogaLogo from './assets/JOGA_LOGO.svg';

export const Sidenavbar = () => (
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
            <span className="links-name">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/juegos">
            <i className="fas fa-gamepad" />
            <span className="links-name">Juegos</span>
          </Link>
        </li>
        <li>
          <Link to="/lfgs">
            <i className="fas fa-users" />
            <span className="links-name">LFGs</span>
          </Link>
        </li>
        <li>
          <Link to="/chats">
            <i className="fas fa-comments" />
            <span className="links-name">Chats</span>
          </Link>
        </li>
        <li>
          <Link to="/stats">
            <i className="fas fa-chart-bar" />
            <span className="links-name">Stats</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
