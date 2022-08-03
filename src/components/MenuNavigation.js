import React from 'react'

export function _MenuNavigation({ state }) {
  return (
    <ul className={state ? 'header__menu-list header__menu-list_type_column list' : 'header__menu-list list'}>
      <li><a className="header__link link" href="#">Афиша</a></li>
      <li><a className="header__link link" href="#">Библиотека</a></li>
      <li><a className="header__link link" href="#">Проекты</a></li>
      <li><a className="header__link link" href="#">История</a></li>
      <li><a className="header__link link" href="#">Блог</a></li>
      <li><a className="header__link link" href="#">Новости</a></li>
      <li><a className="header__link link" href="#">О&nbsp;фестивале</a></li>
      <li><a className="header__link link" href="#">Контакты</a></li>
    </ul>
  )
}

export const MenuNavigation = React.memo(_MenuNavigation);