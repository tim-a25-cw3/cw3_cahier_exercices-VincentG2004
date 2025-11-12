import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    const swiper = new Swiper('.js-swiper', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
new Main();
