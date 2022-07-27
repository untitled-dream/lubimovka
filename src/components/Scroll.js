export default class Scroll {
  constructor({ selector }) {
    this._buttonScroll = document.querySelector(selector);
  }

  scrollToTop() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      this._buttonScroll.classList.add('scroll-to-up_active');
    } else {
      this._buttonScroll.classList.remove('scroll-to-up_active');
    }
    this._setScrollProgress(document.body.scrollTop || document.documentElement.scrollTop);
  }

  _setScrollProgress(data) {
    const progress = (data / (document.documentElement.offsetHeight - window.innerHeight)) * 100;
    this._buttonScroll.style.setProperty('--progress', `${progress}%`);
  }
}