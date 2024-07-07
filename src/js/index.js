// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".financing__swiper", {
  // Navigation arrows
  navigation: {
    nextEl: ".financing__button-next",
    prevEl: ".financing__button-prev",
  },

});
