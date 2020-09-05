import React, { useState, useEffect } from "react"

import hamburgerStyles from "./hamburger.module.scss"
import MainMenu from "./mainmenu"

const Hamburger = () => {
  const [open, setOpen] = useState(false)

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setOpen(!open)
    }
  }
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [open])
  return (
    <>
      <span
        role="button"
        className={`material-icons ${hamburgerStyles.hamburger} ${hamburgerStyles.materialIcons}`}
        onClick={() => setOpen(!open)}
        onKeyPress={handleKeyDown}
        tabIndex="0"
        style={{ color: `${open ? "white" : ""}` }}
      >
        {open ? "close" : "menu"}
      </span>
      <MainMenu open={open} />
    </>
  )
}

export default Hamburger
