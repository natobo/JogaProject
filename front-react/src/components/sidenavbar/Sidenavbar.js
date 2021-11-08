import React from 'react';
import './Sidenavbar.scss';
import { Link } from 'react-router-dom';
import jogaLogo from './assets/JOGA_LOGO.svg';

export const Sidenavbar = () => (
  <div>
    <div className="sidebargames">
      <div className="logocontainer">
        <a className="navbar-brand" href="#">
          <img className="logo" src={jogaLogo} alt="Logo Joga" />
        </a>
      </div>
      <ul className="nav_list">
        <li>
          <Link to="/home">
            <i className="bx bx-home-alt" />
            <span className="links-name">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/juegos">
            <i className="bx bx-game" />
            <span className="links-name">Juegos</span>
          </Link>
        </li>
        <li>
          <Link to="/lfgs">
            <i className="bx bx-group" />
            <span className="links-name">LFGs</span>
          </Link>
        </li>
        <li>
          <Link to="/chats">
            <i className="bx bx-chat" />
            <span className="links-name">Chats</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
