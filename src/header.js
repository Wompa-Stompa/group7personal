import React from 'react';
import navigation from "./navigation.js";

function Header() {

  return (
    <header className="flex-row px-1">
      <div className="header">
        <h1>
        <p>TapCard</p>
        </h1>
      </div>
      <navigation></navigation>
    </header>
  );
}

export default Header;