import React from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MediaReview({ reviews, modifier, title, swiperClass, slidesPerView, slideMapFunction }) {
  return (
    <section className={`reviews ${'reviews_' + modifier}`}>
      <div className={`slider ${'slider_' + modifier}`}>
        <div className={`slider__title-and-control-container ${'slider__title-and-control-container_' + modifier}`}>
          <h2 className='slider__title'>{title}</h2>
          <div className='slider__control'>
            <p className={`slider__pagination ${'slider__pagination_' + modifier}`} id={modifier}></p>
            <div className='slider__button-container'>
              <button className={`slider__button ${'slider__button-prev-' + modifier} button`} />
              <button className={`slider__button ${'slider__button-next-' + modifier} button`} />
            </div>
          </div>
        </div>
        <Swiper
          className={swiperClass}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.slider__button-prev-' + modifier,
            nextEl: '.slider__button-next-' + modifier,
          }}
          pagination={{
            el: '.slider__pagination#' + modifier,
            clickable: true,
            bulletClass: 'slider__dot',
            bulletActiveClass: 'slider__dot_active',
            horizontalClass: 'slider__markers',
          }}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          grabCursor={true}
          rewind={true}
        >
          {
            reviews.map(slideMapFunction)
          }
        </Swiper>
      </div>
    </section>
  );
}

export default MediaReview;
