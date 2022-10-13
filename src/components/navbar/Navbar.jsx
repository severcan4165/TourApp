import React from 'react'
import NavBarStyles from "../Sass/Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={NavBarStyles.container}>
        <a className={NavBarStyles.link} href="#">ABOUT US</a>
        <a className={NavBarStyles.link} href="#">FOR YOU</a>
        <a className={NavBarStyles.link} href="#">SERVICES</a>
        <a className={NavBarStyles.link} href="#">BLOG</a>
        <a className={NavBarStyles.link} href="#">VLOG</a>
        <a className={NavBarStyles.link} href="#">CONTACT</a>
    </div>
  )
}

export default Navbar