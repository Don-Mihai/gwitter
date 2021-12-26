import React from "react";
import { Link } from "react-router-dom";

const NavItem = React.memo(({ routeLink, title, children }) => {
  return (
    <>
      <Link className="nav__link btn" to={routeLink}>
        {children}
        {title}
      </Link>
    </>
  );
});

export default NavItem;
