import React from 'react'

const MenuSocial = React.memo(({ state }) => {
  return (
    <ul className={state ? 'header__menu-list header__menu-list_type_column list' : 'header__menu-list list'}>
      <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/festival.lubimovka">fb</a></li>
      <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lubimovka">inst</a></li>
      <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCDZ1HTzBVBxm_vw6tV7C3lg">ytube</a></li>
      <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://t.me/lubimovka">tlgrm</a></li>
      <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://vk.com/festival.lubimovka">vk</a></li>
    </ul>
  )
})

export default MenuSocial;