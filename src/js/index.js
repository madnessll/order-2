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

document.addEventListener("DOMContentLoaded", () => {
  // Находим элемент с классом .swiper-button-prev
  var element = document.querySelector(".swiper-button-prev");

  if (element) {
    element.addEventListener("click", () => {
      console.log("Выловил");
    });
  } else {
    console.log('Элемент с классом "swiper-button-prev" не найден');
  }
});