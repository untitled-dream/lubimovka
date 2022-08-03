import React from 'react'

const MenuDonation = React.memo(() => {
  return (
    <a className="header__link link" href="#" target="_blank" rel="noopener noreferrer">
      <span className="header__donation-text">Поддержать</span>
    </a>
  )
})

export default MenuDonation
