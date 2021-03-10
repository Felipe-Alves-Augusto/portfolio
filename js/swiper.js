window.onload = function(){


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 10,
        // init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween:10,
          },
          
        }
      });
}