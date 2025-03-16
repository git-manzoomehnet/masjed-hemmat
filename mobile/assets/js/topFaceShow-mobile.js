
const topFaceSlider = new Swiper('.topFaceSlider', {
    slidesPerView: "auto",
    spaceBetween: 50,
    speed: 1000,
    navigation: {
        nextEl: '.nextTopFDef',
        prevEl: '.prevTopFDef',
    },

});
let navList = document.querySelector(".navList ul")
let h2 = document.querySelectorAll("h2")
h2.forEach(element => {
    if (element.innerHTML != "") {
        let newLi = `  <li class="py-3 px-24 text-center w-full bg-gray-light cursor-pointer group/navTop duration-500 [&.activeNavList]:bg-gold-pr/[0.44] last:border-l-0 border-l border-l-black">
                         <span class="font-Kohinoor500 whitespace-nowrap block w-full text-base py-2 ">
                             ${element.innerHTML}
                         </span>
                     </li>`
        navList.insertAdjacentHTML("beforeend", newLi);

    }
});


let lists = document.querySelectorAll(".navList ul li")
lists.forEach((element,i) => {
    element.addEventListener("click" , function() {
        lists.forEach(element => {
            element.classList.remove("activeNavList")
        });
        element.classList.add("activeNavList")
        lenis.scrollTo(h2[i] , {
            offset : -200,   
        })
        
    })
});











document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("h2"); // انتخاب تمام سکشن‌ها
    let navItems = document.querySelectorAll(".navList ul li"); // انتخاب آیتم‌های نویگیشن

    if (sections.length === 0 || navItems.length === 0) {
        console.error("❌ سکشن‌ها یا آیتم‌های نویگیشن پیدا نشدند!");
        return;
    }

    function updateActiveNav() {
        let viewportCenter = window.innerHeight / 2; // نقطه وسط صفحه
        let closestIndex = 0;
        let minDistance = Infinity;

        sections.forEach((section, index) => {
            let rect = section.getBoundingClientRect();
            let sectionCenter = rect.top + rect.height / 2; // مرکز سکشن

            let distance = Math.abs(sectionCenter - viewportCenter); // فاصله از وسط صفحه

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        // حذف کلاس از همه آیتم‌های نویگیشن
        navItems.forEach(item => item.classList.remove("activeNavList"));

        // اضافه کردن کلاس به آیتم نویگیشن مربوطه
        if (navItems[closestIndex]) {
            navItems[closestIndex].classList.add("activeNavList");
        }
    }

    // بررسی هنگام لود صفحه
    updateActiveNav();

    // بررسی هنگام اسکرول
    window.addEventListener("scroll", updateActiveNav);
});
