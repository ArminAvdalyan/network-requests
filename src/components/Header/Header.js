import React from "react";

import NavLink from "components/NavLink/NavLink";

import "./Header.scss";


const headerLink = [
  {
    title: "Homepage",
    link: "/"
  },
  {
    title: "Posts",
    link: "/posts"
  },
  {
    title: "Todos",
    link: "/todo"
  },
  {
    title: "Auth",
    link: "/auth"
  }
]
const Header = () => {
  return (
    <div className="app-header">
      <nav>
        <ul className="app-header_ul">
          {headerLink.map(el => {
            return (
              <li key={el.title} className="app-header_ul_li">
                <NavLink to={el.link}>{el.title}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
export default Header;
