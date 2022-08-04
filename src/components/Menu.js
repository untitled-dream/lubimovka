import React from 'react'
import Modal from 'react-modal';

import MenuNavigation from './MenuNavigation'
import MenuSocial from './MenuSocial'
import MenuDonation from "./MenuDonation";

Modal.setAppElement('#root');

const Menu = ({ isMenuState, onShow, onToggleState, currentWindowWidth }) => {

  return (
    <>
      <button className={onShow ? 'menu menu_showed' : 'menu'} type='button' onClick={() => onToggleState()} id='menu' name='menu'></button>
      <Modal
        isOpen={isMenuState && onShow}
        className="menu__popup"
        overlayClassName="menu__popup-overlay"
        onRequestClose={onToggleState}
        shouldCloseOnOverlayClick={true}
      >
        {
          currentWindowWidth < 936 &&
          <MenuNavigation typeColumn={isMenuState} />
        }
        {
          currentWindowWidth < 1230 &&
          <MenuSocial typeColumn={isMenuState} />
        }
        {
          currentWindowWidth < 1357 &&
          <MenuDonation />
        }
      </Modal>
    </>
  )

}

export default Menu
