// /*створюємо змінні*/
// let prev = document.querySelector("#details-restaurant-arrow-prev");
// let next = document.querySelector("#details-restaurant-arrow-next");
// // let sliderImg = document.querySelector(".big-img");
//
// /*робимо кнопку переключання фото*/
// next.onclick = function () {
//   /*змінна активного фото*/
//   let currentSlide = document.querySelector(".details-restaurant-slider-img .active");
//
//   /*прибираємо класс active*/
//   currentSlide.classList.remove("active");
//
//   /*робимо змінну щоб обирати наступнен фото*/
//   let nextSlide = currentSlide.nextElementSibling;
//
//   /*додаємо наступному фото класс active*/
//   /*додаємо умову щоб класс active повертався назад*/
//   if (nextSlide) {
//     nextSlide.classList.add("active");
//   } else {
//     /*змінна першого елемента*/
//     let nextSlide = document.querySelector(".li-slider-img");
//     nextSlide.classList.add("active");
//   }
//
//   // sliderImg.src = nextSlide.querySelector(".small-img").src;
// };
//
//
// /*кнопка prev*/
// prev.onclick = function () {
//   /*змінна активного фото*/
//   let currentSlide = document.querySelector(".details-restaurant-slider-img .active");
//
//   /*прибираємо класс active*/
//   currentSlide.classList.remove("active");
//
//   /*робимо змінну щоб обирати наступнен фото*/
//   let prevSlide = currentSlide.previousElementSibling;
//
//   /*додаємо наступному фото класс active*/
//   if (prevSlide) {
//     prevSlide.classList.add("active");
//   } else {
//     /*змінна останнього елемента*/
//     let prevSlide = document.querySelector(".li-slider-img:last-child");
//     prevSlide.classList.add("active");
//   }
//
//   // sliderImg.src = prevSlide.querySelector(".small-img").src;
// };

