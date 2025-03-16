const topfacesSlider = new Swiper('.topfacesSlider', {
    // Optional parameters
    loop: false,
  
    slidesPerView:1,
    spaceBetween: 50,
    speed:1000,
    navigation: {
        nextEl: '.nextTopSearch',
        prevEl: '.prevTopSearch',
      },
  });
const simayeMasjedSlider = new Swiper('.simayeMasjedSlider', {
    // Optional parameters
    loop: false,
  
    slidesPerView:1,
    spaceBetween: 32,
    speed:1000,
    navigation: {
        nextEl: '.nextsimayeMasjed',
        prevEl: '.prevsimayeMasjed',
      },
  });
const GallerySlider = new Swiper('.GallerySlider', {
    // Optional parameters
    loop: false,
  
    slidesPerView:1,
    spaceBetween: 32,
    speed:1000,
    navigation: {
        nextEl: '.nextGallery',
        prevEl: '.prevGallery',
      },
  });
const EventsSlider = new Swiper('.EventsSlider', {
    // Optional parameters
    loop: false,
  
    slidesPerView:1,
    speed:1000,
    navigation: {
        nextEl: '.nextEvents',
        prevEl: '.prevEvents',
      },
  });

