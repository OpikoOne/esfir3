import header from "./modules/header.js"
import tabs from "./modules/basic/tabs.js"
import slider from "./modules/basic/slider.js";
import modal from "./modules/modal.js";
import price from "./modules/price/price.js"

window.addEventListener('DOMContentLoaded' , () =>{
  price();
  header('.header__top', '.header', '.header__burger', '.menu', '.header__right-block_btn');
  tabs('.dots__item', '.slider__content', '.dots__items', '.active');
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
  modal('[data-modal]', '.modal');
});


/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/


// const tabs = document.querySelectorAll('slideheader__item'),
  //     tabContent = document.querySelectorAll(".slidecontent"),
  //     tabParents = document.querySelector('.slideheader__items');