import { useState } from 'react'

import { PlayContext, playInfo } from "../context/PlayContext";

import Review from "./Review";
import Project from "./Project";
import SocialShare from "./SocialShare";
import PhotoGallery from "./PhotoGallery";

import ImagePopup from './ImagePopup';

function Main() {


  const [isViewImagePopupOpen, setViewImagePopupOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhoto] = useState();

  function handlePhotoClick(photoIndex) {
    setSelectedPhoto(photoIndex);
    setViewImagePopupOpen(true);
  }

  function closeAllPopups() {
    setViewImagePopupOpen(false)
  }

  return (
    <main className="content">
      <PlayContext.Provider value={playInfo['s-uchilisha']} >
        <Project />
        <PhotoGallery onPhotoClick={handlePhotoClick} />
        <Review />
        <SocialShare />

        {isViewImagePopupOpen &&
          <ImagePopup
            isOpen={isViewImagePopupOpen}
            photoIndex={selectedPhotoIndex}
            onClose={closeAllPopups}
          />}
      </PlayContext.Provider>
    </main>
  )
}

export default Main