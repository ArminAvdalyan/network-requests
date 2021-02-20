import React from "react";
import Link from "components/Link/Link";

import "./Header.scss";

const Header = () => {
  return (
    <div className="app-header">
      <nav>
        <ul className="app-header_ul">
          <li className="app-header_ul_li">
            <Link to="/">Homepage</Link>
          </li>
          <li className="app-header_ul_li">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="app-header_ul_li">
            <Link to="/todo">Todos</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Header;
