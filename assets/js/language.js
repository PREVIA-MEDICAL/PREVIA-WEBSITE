
function redirectToUserLanguage() {
  
    // // 01 - first dectect the user language of the Browser
    var userLang = navigator.language? navigator.language : navigator.userLanguage;
    var subUserString = userLang.substring(0, 2) 
    //     // if the userLang exists them it will redirect to the path of the language.
        if (subUserString == "fr"){
             window.location.replace("https://previa-medical.github.io/PREVIA-WEBSITE/index_fr.html");
    //         break;
        }// end if

}// end function redirectToUserLanguage()