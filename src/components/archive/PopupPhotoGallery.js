import Popup from "./Popup.js";

export default class PopupGalleryImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageSelector = this._popup.querySelector(".popup__gallery-image");
    }

    setEventListener() {
        super.setEventListener()
    }

    open(data) {
        super.open();
        this._imageSelector.alt = data.alt;
        this._imageSelector.src = data.src;
    }
}