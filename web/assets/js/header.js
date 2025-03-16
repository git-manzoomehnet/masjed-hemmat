document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("language-dropdown"),
    t = document.getElementById("language-button");
  t.addEventListener("click", function (t) {
    e.classList.toggle("hidden"), t.stopPropagation();
  }),
    document.addEventListener("click", function (n) {
      e.contains(n.target) || t.contains(n.target) || e.classList.add("hidden");
    }),
    e.querySelectorAll("li").forEach((t) => {
      t.addEventListener("click", function (t) {
        e.classList.add("hidden"), event.stopPropagation();
      });
    });
});


let searchBtn = document.querySelector(".searchBtn"),
  searchPop = document.querySelector(".searchPop"),
  closeSearchForm = document.querySelector(".closeSearchForm");
searchBtn.addEventListener("click", function (e) {
  // (searchPop.style.transform = "scale(1)"), (searchPop.style.scale = "1");
  document.querySelector(".searchPop").classList.remove("scale-0", "opacity-0", "invisible");
document.querySelector(".searchPop").classList.add("scale-100", "opacity-100", "visible");

}),
  closeSearchForm.addEventListener("click", function (e) {
    // (searchPop.style.transform = "scale(0)"), (searchPop.style.scale = "0");
    document.querySelector(".searchPop").classList.add("scale-0", "opacity-0", "invisible");
document.querySelector(".searchPop").classList.remove("scale-100", "opacity-100", "visible");

  });
