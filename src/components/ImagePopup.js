import { useContext, useEffect } from 'react';

import { PlayContext } from '../context/PlayContext';

import { Navigation, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactModal from 'react-modal';

function ImagePopup({ isOpen, photoIndex, onClose }) {
  const { id, photoGallery } = useContext(PlayContext);
  
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.removeAttribute('style');
    return () => {
      document.body.removeAttribute('style');
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      style={{
        overlay: { 
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.9', 
          zIndex: 2 },
        content: {
          height: 'fit-content',
          top: 'auto',
          background: 'none',
          border: 'none',
        },
      }}
    >
      <Swiper
        modules={[Navigation, Keyboard]}
        initialSlide={photoIndex}
        navigation={{
          prevEl: '.slider__button-prev',
          nextEl: '.slider__button-next',
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        grabCursor={true}
        rewind={true}
      >
        {photoGallery.map((item, i) => (
          <SwiperSlide key={i} className='popup__image-container' onClick={onClose}>
            {
              <img
                className='popup__gallery-image'
                src={require(`../images/plays/${id}/gallery/${item}`)}
                alt='Описание'
              />
            }
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className='popup__button-close button'
        onClick={onClose}
        type='button'
        title='Закрыть окно'
      />
      <button
        className='popup__slider-button slider__button-prev button'
        type='button'
        name='prev'
        title='Предыдущая фотография'
      />
      <button
        className='popup__slider-button slider__button-next button'
        type='button'
        name='next'
        title='Следующая фотография'
      />
    </ReactModal>
  );
}

export default ImagePopup;
