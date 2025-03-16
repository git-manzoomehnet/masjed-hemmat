const galleryShowSlider = new Swiper('.galleryShowSlider', {
    speed: 1000,
    spaceBetween: 55,
    centeredSlides:true,
    slidesPerView:1.5,

    loop:true,
    allowTouchMove:false,
    navigation: {
        nextEl: '.nextGallery',
        prevEl: '.prevGallery',
      },
  });