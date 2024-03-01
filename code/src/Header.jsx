/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css"; 

const Header = () => {
  return (
    <header>
      <div className="navbar">
      <div className="logo">
          <a href="/home">
            {/* <img src="/images/logos/vh.svg" /> */}
            <p>NoteWorthy</p>
          </a>
        </div>
        <div className="nav-links">
          <ul>
            <li><a href="/create">Create A Note</a></li>
            <li><a href="/view"> View Note</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </div>
        </div>
    </header>
  );
};

export default Header;
