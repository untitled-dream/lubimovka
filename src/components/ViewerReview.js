import React from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ViewerReview({ reviews }) {
  return (
    <section className='reviews'>
      <div className='slider'>
        <div className='slider__title-and-control-container'>
          <h2 className='slider__title'>Отзывы зрителей</h2>
          <div className='slider__control'>
            <p className='slider__pagination' id='people'></p>
            <div className='slider__button-container'>
              <button className="slider__button slider__button-prev-people button" type='button' name='prev' title='Предыдущий слайд' />
              <button className="slider__button slider__button-next-people button" type='button' name='next' title='Следующий слайд' />
            </div>
          </div>
        </div>
        <Swiper
          className='slider__container'
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.slider__button-prev-people',
            nextEl: '.slider__button-next-people',
          }}
          pagination={{
            el: '.slider__pagination#people',
            clickable: true,
            bulletClass: 'slider__dot',
            bulletActiveClass: 'slider__dot_active',
            horizontalClass: 'slider__markers',
          }}
          slidesPerView={3}
          spaceBetween={30}
          grabCursor={true}
          rewind={true}
        >
          {reviews.map(({ text, author }, i) => (
            <SwiperSlide key={i}>
              {() => (
                <div className='slider__item slider__item_active'>
                  <article className='review review_size_small'>
                    <p className='review__text'>{text}</p>
                    <p className='review__text'>{author}</p>
                  </article>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ViewerReview;
