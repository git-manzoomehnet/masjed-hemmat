const host = { debug: !1, settings: { "connection.web.callcommand": "/", "connection.web.trust_login": "https://basispanel.ir/apicms", "connection.web.basiscore": "https://basispanel.ir/apicms", "connection.web.media": "https://basispanel.ir/apicms", "default.dbsource.verb": "post", "default.call.verb": "get", "default.viewCommand.groupColumn": "prpid", "default.dmnid": "4936", "default.binding.regex": "\\{##([^#]*)##\\}" } };
const topFaceFilter = new Swiper('.topFaceFilter', {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 50,

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

let catid = document.querySelector(".catidC").getAttribute("data-val")


filterBtn.forEach(element => {
    
    console.log(catid);
    if (element.getAttribute("data-topFace")==catid) {
        console.log(element);
    element.classList.add("activeFilterBtn")
    
    $bc.setSource("cms.dataFace", element.getAttribute("data-topFace"))
    
}
    element.addEventListener("click", function (params) {
        removeActive()
        element.classList.add("activeFilterBtn")

        $bc.setSource("cms.dataFace", element.getAttribute("data-topFace"))
    })
});
