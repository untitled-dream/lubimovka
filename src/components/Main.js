import React from 'react'

import { PlayContext, playInfo } from "../context/PlayContext";

import Review from "./Review";
import Project from "./Project";
import SocialShare from "./SocialShare";
import PhotoGallery from "./PhotoGallery";

function Main() {
  return (
    <main className="content">
      <PlayContext.Provider value={playInfo['s-uchilisha']} >
        <Project />
        <PhotoGallery/>
        <Review />
        <SocialShare />
      </PlayContext.Provider>
    </main>
  )
}

export default Main