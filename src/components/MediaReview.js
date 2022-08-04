import React from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MediaReview({ reviews }) {
  return (
    <section className='reviews'>
      <div className='slider slider_media'>
        <div className='slider__title-and-control-container slider__title-and-control-container_media'>
          <h2 className='slider__title'>Рецензии</h2>
          <div className='slider__control'>
            <p className='slider__pagination slider__pagination_media' id='media'></p>
            <div className='slider__button-container'>
              <button className='slider__button slider__button-prev-media button' type='button' name='prev' title='Предыдущий слайд' />
              <button className='slider__button slider__button-next-media button' type='button' name='next' title='Следующий слайд' />
            </div>
          </div>
        </div>
        <Swiper
          className='slider__container-overflow'
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.slider__button-prev-media',
            nextEl: '.slider__button-next-media',
          }}
          pagination={{
            el: '.slider__pagination#media',
            clickable: true,
            bulletClass: 'slider__dot',
            bulletActiveClass: 'slider__dot_active',
            horizontalClass: 'slider__markers',
          }}
          spaceBetween={30}
          grabCursor={true}
          rewind={true}
        >
          {reviews.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? 'slider__item slider__item_active'
                      : 'slider__item'
                  }
                >
                  <article className='review review_size_big'>
                    <img
                      className='review__media-logo'
                      src={require(`../images/${item.logo}`)}
                      alt={item.title}
                    />
                    <p className='review__text review__text_media'>{item.text}</p>
                    <a
                      href={item.readMoreLink}
                      className='review__link-block link link_type_filling'
                    >
                      Читать полностью
                    </a>
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

export default MediaReview;
