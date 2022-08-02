import { useContext, useRef, useEffect } from 'react'

import { PlayContext } from "../context/PlayContext";

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImagePopup({ isOpen, photoIndex, onClose }) {

  const swiperRef = useRef(null)
  useEffect(() => {
    swiperRef.current.swiper.slideTo(photoIndex, false);
  }, [photoIndex])
  
  const { photoGallery } = useContext(PlayContext);

  return (
    <div className={isOpen ? 'popup popup_opened' : 'popup'} id="photo-gallery-view">
      <Swiper
        ref={swiperRef}
        
        modules={[Navigation]}
        navigation={{
          prevEl: '.slider__button-prev',
          nextEl: '.slider__button-next',
        }
        }

        grabCursor={true}
        rewind={true}
      >
        {
          photoGallery.map((item, i) => (
            <SwiperSlide key={i} className='popup__image-container'>
              {
                <img className="popup__gallery-image" src={require(`../images/${item}`)} alt="Описание" />
              }
            </SwiperSlide>
          ))
        }
      </Swiper>
      <button className="popup__button-close button" onClick={onClose} type="button" title="Закрыть окно" />
      <button className="popup__slider-button slider__button-prev button" type="button" title="Предыдущая фотография" />
      <button className="popup__slider-button slider__button-next button" type="button" title="Следующая фотография" />
    </div>
  )
}

export default ImagePopup