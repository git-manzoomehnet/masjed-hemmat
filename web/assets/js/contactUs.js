const host = { debug: !1, settings: { "connection.web.callcommand": "/", "connection.web.trust_login": "https://basispanel.ir/apicms", "connection.web.basiscore": "https://basispanel.ir/apicms", "connection.web.media": "https://basispanel.ir/apicms", "default.dbsource.verb": "post", "default.call.verb": "get", "default.viewCommand.groupColumn": "prpid", "default.dmnid": "4936", "default.binding.regex": "\\{##([^#]*)##\\}" } };

let captchaInput;
let captchaContainerclass ;

let loaderContainer = document.querySelector(".loaderContainer");
let formBtn = document.querySelector(".formBtn")
let loaderForm = document.querySelector(".loaderForm")
formBtn.addEventListener("click" , function (params) {
  formBtn.querySelector("span").style.display="none"
  loaderForm.style.display="block";
  console.log(captchaInput.value);
  
if (captchaInput.value=="") {
  captchaContainerclass.style.background="#FFCECE"
    captchaInput.setAttribute("placeholder" , "کد امنیتی را لطفا وارد نمایید.")
  captchaInput.classList.add("errorPlaceholder")
  setTimeout(() => {
    
    captchaContainerclass.style.background="#FFFFFF"
      captchaInput.setAttribute("placeholder" , "")
    captchaInput.classList.remove("errorPlaceholder")

    formBtn.querySelector("span").style.display="flex"
    loaderForm.style.display="none";
  }, 3000);
  
}


})
function onSource1(args) {
    console.log("onSource");
    const captcha = document.querySelector(
      ".homeForm1 #requestBox input[name='captcha']"
    ).value;
    const captchaid = document.querySelector(
      ".homeForm1 #requestBox input[name='captchaid']"
    ).value;
    const stringJson = JSON.stringify(args.source?.rows[0]);
    console.log("stringJson", stringJson);
    $bc.setSource("edit.object1", {
      value: stringJson,
      captcha: captcha,
      captchaid: captchaid,
    });
  }
  
  let responsMsg = document.querySelector(".responsMsg1");
  let responsMsgIn = document.querySelector(".responsMsg1 span");
  let responsMsgInC = document.querySelector(".responsMsg1 .para");
  async function OnProcessedEditObject1(args) {
    console.log("OnProcessedEditObject1");
    const response = args.response;
    const json = await response.json();
    console.log(json);
    
    if (json.errorid == 6) {
      console.log(json);
      responsMsgIn.innerHTML = "پیام شما با موفقیت ثبت گردید.";
      responsMsg.style.transform = "scale(1)";
      responsMsgInC.style.background = "#009384";

      document.querySelector("form").reset();
      let questions = document.querySelectorAll(
        ".homeForm1 div[data-bc-question]"
      );
      setTimeout(() => {



        formBtn.querySelector("span").style.display="flex"
        loaderForm.style.display="none";
      }, 2000);
      setTimeout(() => {
        
        responsMsg.style.transform = "scale(0)";
      }, 2500);
    }
    if (json.errorid == 4) {
      console.log(json);
     

      responsMsgIn.innerHTML = "مشکلی پیش آمده، لطفا مجدد تلاش نمایید.";
      responsMsg.style.transform = "scale(1)";
      responsMsgInC.style.background = "#B8930C";

      document.querySelector("form").reset();

      setTimeout(() => {

        formBtn.querySelector("span").style.display="flex"
        loaderForm.style.display="none";
    
        
      }, 2000);
      setTimeout(() => {
        
        responsMsg.style.transform = "scale(0)";
      }, 2500);

    }
    if (json.errorid == 15 && captchaInput.value!="") {
      console.log(json);
     

      responsMsgIn.innerHTML = "لطفا کپچا را به درستی وارد کنید.";
      responsMsg.style.transform = "scale(1)";
      responsMsgInC.style.background = "#B8930C";

      document.querySelector("form").reset();

      setTimeout(() => {

        formBtn.querySelector("span").style.display="flex"
        loaderForm.style.display="none";
      
        
      }, 2000);
      setTimeout(() => {
        
        responsMsg.style.transform = "scale(0)";
      }, 2500);

    }
  
  }
  
  function renderFn1(params) {
    document.querySelector(".qclass8").style.display="flex"
    console.log("renderFn1");
     captchaInput = document.querySelector(".captchaContainerclass .codeinputm")
     captchaContainerclass = document.querySelector(".captchaContainerclass")
    loaderContainer.style.display = "none";

  }
  
  function renderEditobject(params) {
  
    
    loaderContainer.style.display = "none";
  }
  