import { useContext } from 'react';

import { PlayContext } from '../context/PlayContext';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactModal from 'react-modal';

function ImagePopup({ isOpen, photoIndex, onClose }) {
  const { id, photoGallery } = useContext(PlayContext);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: { 
          backgroundColor: 'rgba(0, 0, 0, 0.9', 
          zIndex: 2 },
        content: {
          display: 'flex',
          alignItems: 'center',
          background: 'none',
          border: 'none',
        },
      }}
    >
      <Swiper
        modules={[Navigation]}
        initialSlide={photoIndex}
        navigation={{
          prevEl: '.slider__button-prev',
          nextEl: '.slider__button-next',
        }}
        grabCursor={true}
        rewind={true}
      >
        {photoGallery.map((item, i) => (
          <SwiperSlide key={i} className='popup__image-container'>
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
