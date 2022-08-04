import React from 'react'

import MenuNavigation from './MenuNavigation'
import MenuSocial from './MenuSocial'
import MenuDonation from "./MenuDonation";

import logo from '../images/logo/lubimovka-logo.svg'

const Header = ({ currentWindowWidth }) => {
  return (
    <header className="header">
      <a className="header__logo-link" href="#">
        <img className="header__logo" src={logo} alt="Логотип фестиваля Любимовка" />
      </a>

      {
        currentWindowWidth >= 936 &&
        <nav className="header__sections-menu">
          <MenuNavigation/>
        </nav>
      }
      {
        currentWindowWidth > 1230 &&
        <nav className="header__social-menu">
          <MenuSocial/>
        </nav>
      }
      {
        currentWindowWidth > 1357 &&
        <div className="header__donation">
          <MenuDonation/>
        </div>
      }
    </header>
  )
}

export default Header
