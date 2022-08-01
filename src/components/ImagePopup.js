import { useContext } from 'react'

import { PlayContext } from "../context/PlayContext";

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImagePopup({ isOpen, selectedPhoto, onClose }) {

  const { photoGallery } = useContext(PlayContext);
  return (
    <div className={isOpen && selectedPhoto ? 'popup popup_opened' : 'popup'} id="photo-gallery-view">
      <Swiper
        className='wrapper'
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
            <SwiperSlide key={i}>
              {() => (
                <div className='popup__image-container'>
                  <img className="popup__gallery-image" src={require(`../images/${item}`)} alt="Описание" />
                </div>
              )}
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

/* 

<img className="popup__gallery-image" src={selectedPhoto} alt="Описание" />
<button className="popup__button-close button" onClick={onClose} type="button" title="Закрыть окно" />
<button className="popup__slider-button button" type="button" title="Предыдущая фотография" />
<button className="popup__slider-button button" type="button" title="Следующая фотография" />

*/
