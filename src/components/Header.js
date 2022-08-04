import React from 'react'
import logo from '../images/logo/lubimovka-logo.svg'

const Header = ({ currentWindowWidth, menuNavigation, menuSocial, menuDonation }) => {
  return (
    <header className="header">
      <a className="header__logo-link" href="#">
        <img className="header__logo" src={logo} alt="Логотип фестиваля Любимовка" />
      </a>

      {
        currentWindowWidth >= 936 &&
        <nav className="header__sections-menu">
          {menuNavigation}
        </nav>
      }
      {
        currentWindowWidth > 1230 &&
        <nav className="header__social-menu">
          {menuSocial}
        </nav>
      }
      {
        currentWindowWidth > 1357 &&
        <div className="header__donation">
          {menuDonation}
        </div>
      }
    </header>
  )
}

export default Header