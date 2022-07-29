import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import Scrolling from "./Scrolling";

function App() {
  return (
    <>
      <Header />
      <Main/>
      <Footer />
      {/* <Scrolling/> */}
      
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