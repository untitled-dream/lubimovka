import { useState, useContext } from 'react'

import { PlayContext, playInfo } from "../context/PlayContext";

import Review from "./Review";
import Project from "./Project";
import SocialShare from "./SocialShare";
import PhotoGallery from "./PhotoGallery";

import ImagePopup from './ImagePopup';

function Main() {

  const [isViewImagePopupOpen, setViewImagePopupOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState('');

  function handlePhotoClick(photo) {
    setSelectedPhoto(photo);
    setViewImagePopupOpen(true);
  }

  function closeAllPopups() {
    setSelectedPhoto('')
  }

  return (
    <main className="content">
      <PlayContext.Provider value={playInfo['s-uchilisha']} >
        <Project />
        <PhotoGallery onPhotoClick={handlePhotoClick}/>
        <Review />
        <SocialShare />

        <ImagePopup
          isOpen={isViewImagePopupOpen}
          selectedPhoto={selectedPhoto}
          onClose={closeAllPopups}
        />
      </PlayContext.Provider>
    </main>
  )
}

export default Main