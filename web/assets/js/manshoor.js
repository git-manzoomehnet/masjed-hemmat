const host = { debug: !1, settings: { "connection.web.callcommand": "/", "connection.web.trust_login": "https://basispanel.ir/apicms", "connection.web.basiscore": "https://basispanel.ir/apicms", "connection.web.media": "https://basispanel.ir/apicms", "default.dbsource.verb": "post", "default.call.verb": "get", "default.viewCommand.groupColumn": "prpid", "default.dmnid": "4936", "default.binding.regex": "\\{##([^#]*)##\\}" } };

let filterBtn = document.querySelectorAll(".filterBtn")

function removeActive() {
    filterBtn.forEach(element => {
        element.classList.remove("activeFilterBtn")
    });
}

let queryId = document.querySelector(".queryId")
filterBtn.forEach(element => {
    if (queryId.innerHTML) {
        if (element.getAttribute("data-topFace")==queryId.innerHTML) {
            element.classList.add("activeFilterBtn")

            $bc.setSource("cms.dataFace", element.getAttribute("data-topFace"))
        }
    }else{
        
        filterBtn[0].classList.add("activeFilterBtn")
        $bc.setSource("cms.dataFace", filterBtn[0].getAttribute("data-topFace"))
    }

    element.addEventListener("click", function (params) {
        removeActive()
        element.classList.add("activeFilterBtn")

        $bc.setSource("cms.dataFace", element.getAttribute("data-topFace"))
    })
});