import React from 'react'

import logo from '../images/logo.svg'
import menu from '../images/icon-burger-menu.svg'

function Header() {
  return (
    <header className="header">
      <a className="header__logo-link" href="#">
        <img className="header__logo" src={logo} alt="Логотип фестиваля Любимовка" />
      </a>
      <nav className="header__sections-menu">
        <ul className="header__menu-list list">
          <li><a className="header__link link" href="#">Афиша</a></li>
          <li><a className="header__link link" href="#">Библиотека</a></li>
          <li><a className="header__link link" href="#">Проекты</a></li>
          <li><a className="header__link link" href="#">История</a></li>
          <li><a className="header__link link" href="#">Блог</a></li>
          <li><a className="header__link link" href="#">Новости</a></li>
          <li><a className="header__link link" href="#">О&nbsp;фестивале</a></li>
          <li><a className="header__link link" href="#">Контакты</a></li>
        </ul>
      </nav>
      <nav className="header__social-menu">
        <ul className="header__menu-list list">
          <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/festival.lubimovka">fb</a></li>
          <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lubimovka">inst</a></li>
          <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCDZ1HTzBVBxm_vw6tV7C3lg">ytube</a></li>
          <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://t.me/lubimovka">tlgrm</a></li>
          <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://vk.com/festival.lubimovka">vk</a></li>
        </ul>
      </nav>
      <div className="header__donation">
        <a className="header__link link" href="#" target="_blank" rel="noopener noreferrer">
          <span className="header__donation-text">Поддержать</span>
        </a>
      </div>
      <img className='header__menu' src={menu} alt='Меню'/>
    </header>
  )
}

export default Header