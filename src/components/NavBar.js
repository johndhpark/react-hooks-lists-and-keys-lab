import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navItems = links.map((link, idx) => (
    <a key={idx} href={`#${link}`}>
      {link}
    </a>
  ));

  return <nav>{navItems}</nav>;
}

export default NavBar;
