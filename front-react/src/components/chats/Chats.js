import React from 'react';
import './Chats.scss';

export const Chats = () => (
  <>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light menu shadow fixed-top">
        <div className="container-fluid">
          {/* <a className="navbar-brand">
            <img src={jogaLogo} alt="Logo Joga" />
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    </header>
  </>
);
