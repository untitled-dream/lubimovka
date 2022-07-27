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

      </main>
      <footer className="footer" id="contacts">
        <a className="footer__logo-link" href="#" target="_blank"><img className="footer__logo" src="<%=require('./images/logo-text.svg')%>" alt="Логотип фестиваля Любимовка" /></a>
        <nav className="footer__partners-block">
          <h3 className="footer__partners-heading">Генеральные партнеры</h3>
          <ul className="footer__partners-list list">
            <li className="footer__partners-list-item">
              <a className="footer__partners-link" href="https://www.prokhorovfund.ru" target="_blank" rel="noopener noreferrer">
                <img className="footer__partners-logo" src="<%=require('./images/partner-prokhorov.svg')%>" alt="Логотип Фонда Михаила Прохорова" />
              </a>
              <p className="footer__partners-subheading">Генеральный партнёр</p>
            </li>
            <li className="footer__partners-list-item">
              <a className="footer__partners-link" href="https://mosbrew.ru" target="_blank" rel="noopener noreferrer">
                <img className="footer__partners-logo" src="<%=require('./images/partner-mosbrew.svg')%>" alt="Логотип Московской пивоваренной компании" />
              </a>
            </li>
            <li className="footer__partners-list-item">
              <a className="footer__partners-link" href="https://sbtg.ru" target="_blank" rel="noopener noreferrer">
                <img className="footer__partners-logo" src="<%=require('./images/partner-sbtg.svg')%>" alt="Логотип видеокомпании SBTG" />
              </a>
              <p className="footer__partners-subheading">Онлайн-трансляции</p>
            </li>
            <li className="footer__partners-list-item">
              <a className="footer__partners-link" href="https://vk.com/public211134323" target="_blank" rel="noopener noreferrer">
                <img className="footer__partners-logo" src="<%=require('./images/partner-a-pogovorit.svg')%>" alt="Логотип подкаста А поговорить" />
              </a>
            </li>
          </ul>
        </nav>
        <address className="footer__address">
          <p className="footer__address-spot">Площадка «8/3»</p>
          <p className="footer__address-text">Москва, ул.&nbsp;Казакова,&nbsp;8, стр.&nbsp;3 Метро&nbsp;«Курская»</p>
        </address>
        <nav className="footer__links">
          <ul className="footer__links-list list">
            <li><a className="footer__link link link_underline" href="#" target="_blank">Любимовка</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Афиша</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Библиотека</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Блог</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Новости</a></li>
          </ul>
        </nav>
        <nav className="footer__links">
          <ul className="footer__links-list list">
            <li><a className="footer__link link link_underline" href="#" target="_blank">О фестивале</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Организаторы</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">История</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Контакты</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Для прессы</a></li>
          </ul>
        </nav>
        <nav className="footer__links">
          <ul className="footer__links-list list">
            <li><a className="footer__link link link_underline" href="#" target="_blank">Все проекты</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Любимовка.Ещё</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Спектакли</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Сборник Любимовка.Пьесы</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Lark+Любимовка</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Практика постдраматурга</a></li>
            <li><a className="footer__link link link_underline" href="#" target="_blank">Эхо Любимовки</a></li>
          </ul>
        </nav>
        <hr className="footer__separator" />
        <p className="footer__copyright">©&nbsp;Любимовка,&nbsp;2021 <a href="#" className="footer__link link link_underline footer__privacy-policy" target="_blank">Политика&nbsp;конфиденциальности</a></p>
        <div className="footer__credits-design">
          <img className="footer__credits-design-logo" src="<%=require('./images/icon-developer-studio-logo.svg')%>" alt="Логотип дизайн-студии" />
          <p className="footer__credits-design-text">дизайн сайта — <a className="footer__link link link_underline" href="https://ru.shishki.co" target="_blank" rel="noopener noreferrer">shishki.collective</a></p>
        </div>
        <p className="footer__credits-web">вёрстка и разработка — студенты <a className="footer__link link link_underline" href="https://practicum.yandex.ru" target="_blank" rel="noopener noreferrer">Яндекс.Практикума</a></p>
      </footer>
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