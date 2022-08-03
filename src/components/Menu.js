import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Menu = ({ isMenuState, menuNavigation, menuSocial, menuDonation, onToggleState, currentWindowWidth }) => {

  const menuSocialClone = React.cloneElement(menuSocial, { state: isMenuState })
  const menuNavigationClone = React.cloneElement(menuNavigation, { state: isMenuState })

  return (
    <>
      {currentWindowWidth < 1357 &&
        <button className='menu' type='button' onClick={() => onToggleState()} id='menu'></button>
      }

      <Modal
        isOpen={isMenuState}
        className="menu__popup"
        overlayClassName="menu__popup-overlay"
        onRequestClose={onToggleState}
        shouldCloseOnOverlayClick={true}
      >
        {currentWindowWidth < 936   && menuNavigationClone}
        {currentWindowWidth < 1230  && menuSocialClone}
        {currentWindowWidth < 1357  && menuDonation}
      </Modal>
    </>
  )

}

export default Menu