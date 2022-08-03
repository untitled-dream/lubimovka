import { useState } from 'react'


import Modal from 'react-modal';

Modal.setAppElement('#root');

function Menu({ currentWindowWidth }) {
  const [modalIsOpen, setIsOpen] = useState(false);

 
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className=''>
        <button className='menu' type='button' onClick={() => setIsOpen(!modalIsOpen)} id='menu'></button>

        <Modal
          isOpen={modalIsOpen}
          className="menu__popup"
          overlayClassName="menu__popup-overlay"
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
        >
          <div >
            { currentWindowWidth < 936 && 
              <ul className="header__menu-list header__menu-list_type_column list">
                <li><a className="header__link link" href="#">Афиша</a></li>
                <li><a className="header__link link" href="#">Библиотека</a></li>
                <li><a className="header__link link" href="#">Проекты</a></li>
                <li><a className="header__link link" href="#">История</a></li>
                <li><a className="header__link link" href="#">Блог</a></li>
                <li><a className="header__link link" href="#">Новости</a></li>
                <li><a className="header__link link" href="#">О&nbsp;фестивале</a></li>
                <li><a className="header__link link" href="#">Контакты</a></li>
              </ul>
            }
            {currentWindowWidth < 1230 &&
              <ul className="header__menu-list header__menu-list_type_column list">
                <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/festival.lubimovka">fb</a></li>
                <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lubimovka">inst</a></li>
                <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCDZ1HTzBVBxm_vw6tV7C3lg">ytube</a></li>
                <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://t.me/lubimovka">tlgrm</a></li>
                <li><a className="header__link link" target="_blank" rel="noopener noreferrer" href="https://vk.com/festival.lubimovka">vk</a></li>
              </ul>
            }

            {currentWindowWidth < 1357 &&
              <a className="header__link link" href="#" target="_blank" rel="noopener noreferrer">
                <span className="header__donation-text">Поддержать</span>
              </a>
            }
          </div>
        </Modal>
      </div>
    </>
  )

}

export default Menu