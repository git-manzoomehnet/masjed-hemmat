const eventSldier = new Swiper('.eventSldier', {
  speed: 1000,
  navigation: {
    nextEl: '.nextEvent',
    prevEl: '.prevEvent',
  },
});


const EventsSliderRel = new Swiper('.EventsSliderRel', {
  // Optional parameters
  loop: false,

  slidesPerView: 1,
  speed: 1000,
  navigation: {
    nextEl: '.nextEventsRel',
    prevEl: '.prevEventsRel',
  },
});





const host = {
  debug: !1,
  settings: {
    "connection.web.callcommand": "/",
    "connection.web.trust_login": "https://basispanel.ir/apicms",
    "connection.web.basiscore": "https://basispanel.ir/apicms",
    "connection.web.media": "https://basispanel.ir/apicms",
    "connection.web.userbehavior": "https://basispanel.ir/apicms",
    "default.dbsource.verb": "post",
    "default.call.verb": "get",
    "default.viewCommand.groupColumn": "prpid",
    "default.dmnid": "4936",
    "default.binding.regex": "\\{##([^#]*)##\\}",
  },
};

let messageSend = document.querySelector(".messageSend")
let commentP = document.querySelector(".commentP")

function renderCommentFn(args) {
  console.log(args);

}
document.querySelector('.submitComment').addEventListener('click', (event) => {
  //  let input1  = document.querySelector('.namee')
  event.preventDefault();
  let textar = document.querySelectorAll('.commentP input')
  let textareas = document.querySelectorAll('.commentP textarea')
  let emptyFlag = false;
 
  textar.forEach(element => {
  if (element.value.trim() === "") {
    emptyFlag = false;
  }
  else{
    emptyFlag=true
  }
});

textareas.forEach(element => {
  if (element.value.trim() === "") {
    emptyFlag = false;
  }
  else{
    emptyFlag=true
  }
});

console.log(emptyFlag);

  if (emptyFlag) {

    let val = document.querySelector(".commentP textarea").value;
    let userName = document.querySelector(".commentP .userName").value;
    console.log("val", val);
    $bc.setSource('db.send', true)
    $bc.setSource('db.senduserName', userName)
    $bc.setSource('db.sendcomment', val)
    $bc.setSource('db.run', true)
    let sendbox = document.querySelector('.messageSend')
    let text = sendbox.querySelector('p')
    text.innerHTML = 'درخواست شما با موفقیت ثبت شد'
    commentP.reset()
    messageSend.style.display = "block"

    document.querySelector(".commentP").reset();
    setTimeout(() => {
      messageSend.style.display = "none"
    }, 3500)
  }
  else {
    let sendbox = document.querySelector('.messageSend')
    let text = sendbox.querySelector('p')
    text.innerHTML = 'فیلدهای الزامی را پر کنید'
    messageSend.style.display = "block"

    setTimeout(() => {
      messageSend.style.display = "none"
    }, 3500)

  }


})





const commentListSlider = new Swiper('.commentListSlider', {

  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: '.nextComment',
    prevEl: '.prevComment',
  },

});