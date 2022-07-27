import React from 'react'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { PlayContext } from '../context/PlayContext';

function MediaReview() {

  const { reviews } = React.useContext(PlayContext);

  return (
    <>
      {
        reviews.media.length &&
        <section className="reviews">
          <h2 className="reviews__title">Рецензии</h2>
          <div className="slider">
            <div className="slider__control">
              <ul className="slider__pagination" />
              <div className="slider__button-container">
                <button className="slider__button slider__button-prev button" />
                <button className="slider__button slider__button-next button" />
              </div>
            </div>
            <Swiper
              className='slider__items-container'
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: '.slider__button-prev',
                nextEl: '.slider__button-next',
              }
              }
              pagination={{
                el: '.slider__pagination',
                clickable: true,
                bulletClass: 'slider__dot',
                bulletActiveClass: 'slider__dot_active',
                horizontalClass: 'slider__markers'
              }
              }
              spaceBetween={30}
              grabCursor={true}
              rewind={true}
            >
              {
                reviews.media.map((item, i) => (
                  <SwiperSlide>
                    {({ isActive }) => (
                      <div className={`slider__item ${isActive && 'slider__item_active'}`} key={i}>
                        <article className="review">
                          <img className="review__media-logo" src={`./images/${item.logo}`} alt={item.title} />
                          <p className="review__text">{item.text}</p>
                          <a href={item.readMoreLink} className="review__link-block link link_fill">Читать полностью</a>
                        </article>
                      </div>
                    )}
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </div>
        </section >
      }
    </>
  )
}

export default MediaReview