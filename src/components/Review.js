import React from 'react';

import SliderSection from './SliderSection';
import { SwiperSlide } from 'swiper/react';

import { PlayContext } from '../context/PlayContext';

function Review() {
  const { id, reviews } = React.useContext(PlayContext);

  const renderMediaSlides = (item, i) => (
    <SwiperSlide key={i}>
      {({ isActive }) => (
        <div className={isActive ? 'slider__item slider__item_active' : 'slider__item'} >
          <article className='review review_size_big'>
            <img
              className='review__media-logo'
              src={require(`../images/plays/${id}/reviews/${item.logo}`)}
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
  );

  const renderPeopleSlides = (item, i) => (
    <SwiperSlide key={i}>
      {() => (
        <div className='slider__item slider__item_active'>
          <article className='review review_size_small'>
            <p className='review__text'>{item.text}</p>
            <p className='review__text review__text_type_author'>{item.author}</p>
          </article>
        </div>
      )}
    </SwiperSlide>
  );

  return (
    <>
      {reviews.media.length && (
        <SliderSection
          reviews={reviews.media}
          modifier='media'
          title='Рецензии'
          swiperClass='slider__container-overflow'
          slidesPerView={1}
          slideMapFunction={renderMediaSlides}
        />
      )}
      {reviews.people.length && (
        <SliderSection
          reviews={reviews.people}
          modifier='people'
          title='Отзывы зрителей'
          swiperClass='slider__container'
          slidesPerView={3}
          slideMapFunction={renderPeopleSlides}
        />
      )}

    </>
  );
}

export default Review;
