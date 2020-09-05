import React from "react"
import { Link } from "gatsby"

import mainMenuStyle from "./mainmenu.module.scss"

const MainMenu = ({ open }) => {
  return (
    <nav className={`${mainMenuStyle.menu} ${open ? mainMenuStyle.open : ""}`}>
      <div>
        <h4 className={mainMenuStyle.logo}>What I Learned</h4>
      </div>
      <ul>
        <li>
          <Link to="/" activeClassName={mainMenuStyle.active}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blog/"
            activeClassName={mainMenuStyle.active}
            partiallyActive={true}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName={mainMenuStyle.active}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu
