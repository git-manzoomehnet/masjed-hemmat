let sideContentContainer = document.querySelector(".sideContentContainer")
function fetchPrayerTimes(lat, lon, city) {
    const apiURL = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`;
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            let timings = data.data.timings;

            // نمایش اوقات شرعی
            document.querySelector(".sunriseP").innerHTML = timings.Sunrise;
            document.querySelector(".fajr").innerHTML = timings.Fajr;
            document.querySelector(".Dhuhr").innerHTML = timings.Dhuhr;
            document.querySelector(".SunsetP").innerHTML = timings.Sunset;
            document.querySelector(".Maghrib").innerHTML = timings.Maghrib;
            document.querySelector(".MidnightP").innerHTML = timings.Midnight;

            // نمایش نام شهر

            document.querySelector(".userLocation").innerHTML = city.replace("شهر ", "");

            // document.querySelector(".userLocation").innerHTML = city;

            // پیدا کردن نزدیک‌ترین اوقات شرعی
            let prayerTimes = {
                "اذان صبح": timings.Fajr,
                "طلوع آفتاب": timings.Sunrise,
                "اذان ظهر": timings.Dhuhr,
                "غروب خورشید": timings.Sunset,
                "اذان مغرب": timings.Maghrib,
                "نیمه‌شب شرعی": timings.Midnight
            };

            findNextPrayer(prayerTimes);
        })
        .catch(error => {
            if (sideContentContainer) {

            document.querySelector(".sideContent .paraError").style.display = "block";
            document.querySelector(".sideContent .inner").style.display = "none";
            }
        });
}

function findNextPrayer(prayerTimes) {
    let now = new Date();
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();

    let closestPrayer = null;
    let closestTimeDiff = Infinity;

    for (let [prayer, time] of Object.entries(prayerTimes)) {
        let [hours, minutes] = time.split(":").map(Number);

        let prayerTime = new Date();
        prayerTime.setHours(hours, minutes, 0);

        let diff = (prayerTime - now) / (1000 * 60); // اختلاف برحسب دقیقه

        if (diff > 0 && diff < closestTimeDiff) {
            closestTimeDiff = diff;
            closestPrayer = { name: prayer, time: time };
        }
    }

    if (closestPrayer) {
        let remainingHours = Math.floor(closestTimeDiff / 60);
        let remainingMinutes = Math.floor(closestTimeDiff % 60);

        document.querySelector(".nextPrayer").innerHTML =
            `${remainingHours}:${remainingMinutes.toString().padStart(2, '0')} مانده تا ${closestPrayer.name}`;
    } else {
        document.querySelector(".nextPrayer").innerHTML = "✅ امروز تمام اوقات شرعی سپری شده است.";
    }
}

// دریافت موقعیت مکانی کاربر و نام شهر
fetch('https://ipwho.is/')
    .then(response => response.json())
    .then(data => {
        let latitude = data.latitude;
        let longitude = data.longitude;
        let city = data.city || "نامشخص"; // اگر شهر موجود نبود، مقدار پیش‌فرض "نامشخص" قرار می‌گیرد.
        
        // fetchPrayerTimes(latitude, longitude, city);


        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=fa`)
        .then(response => response.json())
        .then(locationData => {
            let city = locationData.address.city || locationData.address.town || locationData.address.village || "نامشخص";
            console.log(city);
            
            fetchPrayerTimes(latitude, longitude, city);
        })
        .catch(error => {
            fetchPrayerTimes(latitude, longitude, "نامشخص");
        });
    })
    .catch(error => {

        if (sideContentContainer) {
            document.querySelector(".sideContent .paraError").style.display = "block";
            document.querySelector(".sideContent .inner").style.display = "none";
            
        }
    });
