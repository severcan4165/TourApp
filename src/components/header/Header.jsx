import React from 'react'
import HeaderStyles from "../Sass/Header.module.scss"

const Header = () => {
  return (
    <div className={HeaderStyles.container}>
        <h1 className={HeaderStyles.h1}>POPULAR TOUR PLACES</h1>
    </div>
  )
}

export default Header;