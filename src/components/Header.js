import React from "react";

/**
 * The Main Header of the App
 */
function Header() {
  return (
    <header id="header">
      <img
        src="/images/logo-raise-now-inverted.png"
        srcSet="
          /images/logo-raise-now-inverted@2x.png 2x,
          /images/logo-raise-now-inverted@3x.png 3x
        "
        alt="raise-now"
        className="main-logo"
      />
    </header>
  );
}

export default Header;
