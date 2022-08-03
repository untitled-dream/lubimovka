import React from 'react'
import Modal from 'react-modal';


Modal.setAppElement('#root');

function Menu({ isMenu, menuNavigation, menuSocial, menuDonation, onClose, currentWindowWidth }) {

  const menuSocialClone = React.cloneElement(menuSocial, { state: isMenu })
  const menuNavigationClone = React.cloneElement(menuNavigation, { state: isMenu })

  return (
    <>
      {currentWindowWidth < 1357 &&
        <button className='menu' type='button' onClick={() => onClose()} id='menu'></button>
      }

      <Modal
        isOpen={isMenu}
        className="menu__popup"
        overlayClassName="menu__popup-overlay"
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
      >
        {currentWindowWidth < 936 && menuNavigationClone}
        {currentWindowWidth < 1230 && menuSocialClone}
        {currentWindowWidth < 1357 && menuDonation}
      </Modal>
    </>
  )

}

export default Menu