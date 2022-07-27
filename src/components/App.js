import React from "react";

import { PlayContext, playInfo } from "../context/PlayContext";
import Header from "./Header";
import Main from "./Main";
import PhotoGallery from "./PhotoGallery";
import MediaReview from "./MediaReview";
import Review from "./Review";
import SocialShare from "./SocialShare";
import Footer from "./Footer";
import Scrolling from "./Scrolling";
import Project from "./Project";

function App() {
  return (
    <>
      <Header />
      <Scrolling />
      <main className="content">
        <PlayContext.Provider value={playInfo['s-uchilisha']} >
          <Project />
          {/*<section className="gallery">
            <h2 className="gallery__title">Заголовок&nbsp;блока с&nbsp;фотографиями</h2>
            <ul className="gallery__grid list">
              <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-1.jpg')%>" alt="Сцена из спектакля" /></li>
              <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-2.jpg')%>" alt="актриса на сцене" /></li>
              <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-3.jpg')%>" alt="Актер на репетиции" /></li>
              <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-4.jpg')%>" alt="Актеры по ролям читают пьесу" /></li>
              <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-5.jpg')%>" alt="Зрители в зале" /></li>
              <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-6.jpg')%>" alt="Молодая актриса" /></li>
              <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-7.jpg')%>" alt="Артисты читают пьесу" /></li>
              <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-8.jpg')%>" alt="Актриса на репетиции" /></li>
            </ul>
          </section>*/}
          <MediaReview />
          <SocialShare />
        </PlayContext.Provider>
        <Footer/>
      </main>
      
      <div className="popup" id="photo-gallery-view">
        <div className="popup__container">
          <img className="popup__gallery-image" src="data:," alt="Описание" />
          <button className="popup__button-close button" type="button" title="Закрыть окно" />
          <button className="popup__slider-button button" type="button" title="Предыдущая фотография" />
          <button className="popup__slider-button button" type="button" title="Следующая фотография" />
        </div>
      </div>
    </>
  );
}

export default App;