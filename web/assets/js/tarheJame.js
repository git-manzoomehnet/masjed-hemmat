const host = { debug: !1, settings: { "connection.web.callcommand": "/", "connection.web.trust_login": "https://basispanel.ir/apicms", "connection.web.basiscore": "https://basispanel.ir/apicms", "connection.web.media": "https://basispanel.ir/apicms", "default.dbsource.verb": "post", "default.call.verb": "get", "default.viewCommand.groupColumn": "prpid", "default.dmnid": "4936", "default.binding.regex": "\\{##([^#]*)##\\}" } };


const tarheJameFilter = new Swiper('.tarheJameFilter', {
    speed: 1000,
    slidesPerView: 3,
    navigation: {
        nextEl: '.nextFace',
        prevEl: '.prevFace',
    },
});


let filterBtn = document.querySelectorAll(".filterBtn")

function removeActive() {
    filterBtn.forEach(element => {
        element.classList.remove("activeFilterBtn")
    });
}

filterBtn[0].classList.add("activeFilterBtn")

$bc.setSource("cms.dataFace", filterBtn[0].getAttribute("data-topFace"))

filterBtn.forEach(element => {




    element.addEventListener("click", function (params) {
        removeActive()
        element.classList.add("activeFilterBtn")

        $bc.setSource("cms.dataFace", element.getAttribute("data-topFace"))
    })
});


function renderTarh(params) {
    const tarhSlider = new Swiper('.tarhSlider', {
        speed: 1000,
        pagination: {
            el: '.tarhPagination',
            clickable: true
        },
        spaceBetween: 60,

        slidesPerView: 1,
        // Navigation arrows
        navigation: {
            nextEl: '.nextTarh',
            prevEl: '.prevTarh',
        },

    });

}