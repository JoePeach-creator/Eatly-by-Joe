// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   centeredSlides: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    370: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    709: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  }
});





document.addEventListener('DOMContentLoaded', function () {
  function initializeSlider(selector) {
    const slider = document.querySelector(selector);
    if (slider) {
      const existingPagination = slider.querySelector('.splide__pagination');
      if (existingPagination) {
        existingPagination.remove();
      }
      new Splide(slider).mount();
    }
  }

  const splideElements = document.querySelectorAll('.splide');
  splideElements.forEach(splideElement => {
    initializeSlider(`#${splideElement.id}`);
  });

  initializeSlider('#slider-one');

  initializeSlider('#slider-two');

  initializeSlider('#slider-menu-choice');
});

document.addEventListener("DOMContentLoaded", function () {
  const modals = {
    sign: [".block-sign", ".sign__modal-in", ".btn__signup"],
    login: [".block-login", ".login__modal-in", ".btn__login"],
    forget: [".block-forget", ".forget__modal-in", ".forget__password"]
  };

  function closeAllModals() {
    Object.values(modals).forEach(modal => document.querySelector(modal[0]).classList.remove("modal-active"));
  }

  Object.values(modals).forEach(([backSelector, blockSelector, buttonSelector]) => {
    const back = document.querySelector(backSelector);
    const block = document.querySelector(blockSelector);
    const buttons = document.querySelectorAll(buttonSelector);

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        closeAllModals();
        back.classList.add("modal-active");
      });
    });

    back.addEventListener("click", () => back.classList.remove("modal-active"));
    block.addEventListener("click", event => event.stopPropagation());
  });
});


const hiddenText = document.querySelectorAll('.accardeon__wrapper-inner');

hiddenText.forEach(function (item) {
  item.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle('accardeon-active')
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__inner');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add('nav__menu-active');
    } else {
      link.classList.remove('nav__menu-active');
    }
  });
});

const open = document.querySelector(".burger__btn")

open.addEventListener("click", function () {
  open.classList.toggle("active")
});

const burgerOpen = document.querySelector(".burger__mobile");
const burgerMenu = document.querySelector('.mobile-nav');

burgerOpen.addEventListener("click", function () {
  burgerMenu.classList.toggle("mobile-nav__active")
});

const mobileOn = document.querySelectorAll(".mobile__more-btn");
const offBlock = document.querySelector(".mobile__off ");

mobileOn.forEach(function(item){
  item.addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("mobile__off")
  });
});


