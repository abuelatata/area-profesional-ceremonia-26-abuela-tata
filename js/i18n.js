(function(){

function applyLanguage(){

const lang = localStorage.getItem("at_lang") || "es";

document.documentElement.lang = lang;
document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

}

applyLanguage();

})();
