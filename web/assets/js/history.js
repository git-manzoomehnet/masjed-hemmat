let timelineEntry = document.querySelectorAll(".timeline__entry span")
console.log("timelineEntry" , timelineEntry);

timelineEntry[0].classList.add("is--active")

function removeActive() {
    timelineEntry.forEach(element => {
        element.classList.remove("is--active")
    });
}

const imgSlider = new Swiper('.textSlider', {
    speed:1000,
   spaceBetween: 50,

    // Navigation arrows
    navigation: {
      nextEl: '.nextText',
      prevEl: '.prevText',
    },
    on:{
        slideChange: function(){
            removeActive();
          timelineEntry[this.activeIndex].classList.add("is--active")

        },
      },
});

timelineEntry.forEach((element,i) => {
    element.addEventListener("click" , function (params) {
        removeActive();
        element.classList.add("is--active")

        imgSlider.slideTo(i,1000)
    })
});