import React from 'react'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ViewerReview({ reviews }) {

  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы зрителей</h2>
      <div className="slider">
        <div className="slider__control">
          <p className="slider__pagination" id="people"></p>
          <div className="slider__button-container">
            <button className="slider__button slider__button-prev-people button" />
            <button className="slider__button slider__button-next-people button" />
          </div>
        </div>
        <Swiper
          className='slider__container'
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.slider__button-prev-people',
            nextEl: '.slider__button-next-people',
          }
          }
          pagination={{
            el: '.slider__pagination#people',
            clickable: true,
            bulletClass: 'slider__dot',
            bulletActiveClass: 'slider__dot_active',
            horizontalClass: 'slider__markers'
          }
          }

          slidesPerView={3}
          spaceBetween={30}
          grabCursor={true}
          rewind={true}
        >
          {
            reviews.map((item, i) => (
              <SwiperSlide key={i}>
                {() => (
                  <div className='slider__item slider__item_active'>
                    <article className='review review_size_small'>
                      <p className='review__text'>{item.text}</p>
                      <p className='review__text' href={item.readMoreLink}>{item.author}</p>
                    </article>
                  </div>
                )}
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section >
  )
}

export default ViewerReview