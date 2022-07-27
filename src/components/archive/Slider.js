export default class Slider {
  constructor({ sliderSelector }) {
    this._slider = document.querySelector(sliderSelector);
    this._itemsContainer = this._slider.querySelector('.slider__items-container');
    this._items = this._slider.querySelectorAll('.slider__item');
    this._markers = this._slider.querySelectorAll('.slider__dot');
    [this._buttonPrev, this._buttonNext] = this._slider.querySelectorAll('.slider__button');
    this._currentIndex = 0;
  }

  setListeners() {
    this._buttonNext.addEventListener('click', () => this._showNext());
    this._buttonPrev.addEventListener('click', () => this._showPrev());
  }
  
  _showNext() {
    if (this._currentIndex < this._items.length - 1) this._currentIndex++;
    this._changeMarker('next');
    this._showItem('next');
    this._itemsContainer.style.left = -this._computeTranslate() + "px";
  }
  
  _showPrev() {
    if (this._currentIndex > 0) this._currentIndex--;
    this._changeMarker('prev');
    this._showItem('prev');
    this._itemsContainer.style.left = -this._computeTranslate() + "px";
  }
  
  _computeTranslate() {
    const gap = Number.parseInt( window.getComputedStyle(this._itemsContainer).gap );
    const itemWidth = this._items[0].clientWidth;
    return (gap + itemWidth) * this._currentIndex;
  };
  
  _changeMarker(direction) {
    this._markers[this._currentIndex].classList.add('slider__dot_active');
    if (direction === 'next') {
      this._markers[this._currentIndex - 1].classList.remove('slider__dot_active')
    } else {
      this._markers[this._currentIndex + 1].classList.remove('slider__dot_active');
    }
  }

  _showItem(direction) {
    this._items[this._currentIndex].classList.add('slider__item_active');
    direction === 'next'
      ? this._items[this._currentIndex - 1].classList.remove('slider__item_active')
      : this._items[this._currentIndex + 1].classList.remove('slider__item_active');
  }
}
