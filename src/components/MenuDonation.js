import React from 'react'

export function _MenuDonation() {
  return (
    <a className="header__link link" href="#" target="_blank" rel="noopener noreferrer">
      <span className="header__donation-text">Поддержать</span>
    </a>
  )
}

export const MenuDonation = React.memo(_MenuDonation);
