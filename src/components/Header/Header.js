import React from "react";

import NavLink from "components/NavLink/NavLink";

import "./Header.scss";

const Header = () => {
  return (
    <div className="app-header">
      <nav>
        <ul className="app-header_ul">
          <li className="app-header_ul_li">
            <NavLink to="/">Homepage</NavLink>
          </li>
          <li className="app-header_ul_li">
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li className="app-header_ul_li">
            <NavLink to="/todo">Todos</NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  )
}
export default Header;
