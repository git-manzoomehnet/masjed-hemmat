document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('language-dropdown');
    const button = document.getElementById('language-button');

    button.addEventListener('click', function (event) {
        dropdown.classList.toggle('hidden');
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && !button.contains(event.target)) {
            dropdown.classList.add('hidden');
        }
    });
    dropdown.querySelectorAll("li").forEach(element => {
        element.addEventListener("click", function (params) {
            dropdown.classList.add('hidden');
            event.stopPropagation();
        })
    });
});

let searchBtn = document.querySelector(".searchBtn")
let searchPop = document.querySelector(".searchPop")
let closeSearchForm = document.querySelector(".closeSearchForm")

searchBtn.addEventListener("click", function (params) {
    searchPop.style.transform = "scale(1)"
    searchPop.style.scale = "1"
})
closeSearchForm.addEventListener("click", function (params) {
    searchPop.style.transform = "scale(0)"
    searchPop.style.scale = "0"
})


let hoverMenu = document.querySelectorAll(".hoverMenu")
hoverMenu.forEach(element => {
    element.addEventListener("click", function (params) {
        element.classList.toggle("activeHoverMenu")
    })
});
let hoverMenu2 = document.querySelectorAll(".hoverMenu2")
hoverMenu2.forEach(element => {
    element.addEventListener("click", function (params) {
        element.classList.toggle("activeHoverMenu2")
    })
});


let menuBar = document.querySelector(".menuBar")
let leftMega = document.querySelector(".leftMega")
let closeMegaMenu = document.querySelector(".closeMegaMenu")
menuBar.addEventListener("click", function (params) {
    leftMega.style.right = "0"

    console.log("click", leftMega);

})
closeMegaMenu.addEventListener("click", function (params) {
    leftMega.style.right = "-100vw"
})

