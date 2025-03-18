let sideContentContainer=document.querySelector(".sideContentContainer");if(sideContentContainer){function fetchPrayerTimes(e,t,n){fetch(`https://api.aladhan.com/v1/timings?latitude=${e}&longitude=${t}&method=2`).then((e=>e.json())).then((e=>{let t=e.data.timings;document.querySelector(".sunriseP").innerHTML=t.Sunrise,document.querySelector(".fajr").innerHTML=t.Fajr,document.querySelector(".Dhuhr").innerHTML=t.Dhuhr,document.querySelector(".SunsetP").innerHTML=t.Sunset,document.querySelector(".Maghrib").innerHTML=t.Maghrib,document.querySelector(".MidnightP").innerHTML=t.Midnight,document.querySelector(".userLocation").innerHTML=n,findNextPrayer({"اذان صبح":t.Fajr,"طلوع آفتاب":t.Sunrise,"اذان ظهر":t.Dhuhr,"غروب خورشید":t.Sunset,"اذان مغرب":t.Maghrib,"نیمه‌شب شرعی":t.Midnight})})).catch((e=>{sideContentContainer&&(document.querySelector(".sideContent .paraError").style.display="block",document.querySelector(".sideContent .inner").style.display="none")}))}function findNextPrayer(e){let t=new Date,n=(t.getHours(),t.getMinutes(),null),i=1/0;for(let[r,o]of Object.entries(e)){let[e,s]=o.split(":").map(Number),a=new Date;a.setHours(e,s,0);let c=(a-t)/6e4;c>0&&c<i&&(i=c,n={name:r,time:o})}if(n){let e=Math.floor(i/60),t=Math.floor(i%60);document.querySelector(".nextPrayer").innerHTML=`${e}:${t.toString().padStart(2,"0")} مانده تا ${n.name}`}else document.querySelector(".nextPrayer").innerHTML="✅ امروز تمام اوقات شرعی سپری شده است."}fetch("https://ipwho.is/").then((e=>e.json())).then((e=>{let t=e.latitude,n=e.longitude;e.city;fetch(`https://nominatim.openstreetmap.org/reverse?lat=${t}&lon=${n}&format=json&accept-language=fa`).then((e=>e.json())).then((e=>{let i=e.address.city||e.address.town||e.address.village||"نامشخص";fetchPrayerTimes(t,n,i)})).catch((e=>{fetchPrayerTimes(t,n,"نامشخص")}))})).catch((e=>{sideContentContainer&&(document.querySelector(".sideContent .paraError").style.display="block",document.querySelector(".sideContent .inner").style.display="none")}));let e=document.querySelector(".sideContent");sideContentContainer?.addEventListener("click",(function(e){sideContentContainer.classList.add("sideContentContainerActive")})),e?.addEventListener("click",(function(t){e.classList.add("sideContentActive"),e.parentElement.classList.add("sideContentContainerActive")})),document.addEventListener("click",(function(t){sideContentContainer?.contains(t.target)||(sideContentContainer?.classList.remove("sideContentContainerActive"),e?.classList.remove("sideContentActive"))}));let t=document.querySelector(".arrBtm"),n=!0;e?.addEventListener("click",(function(t){t.stopPropagation(),n&&(e.classList.add("sideContentActive"),n=!1)})),t?.addEventListener("click",(function(t){t.stopPropagation(),e?.classList.remove("sideContentActive")})),document.addEventListener("click",(function(t){sideContentContainer?.contains(t.target)||e?.contains(t.target)||(sideContentContainer?.classList.remove("sideContentContainerActive"),e?.classList.remove("sideContentActive"))}))}