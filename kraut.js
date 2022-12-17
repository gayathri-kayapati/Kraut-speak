var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/kraut.json";

function getTranslationUrl(text) {
  return serverUrl + "?" + "text= " + text;
}

function btnClickHandler() {
  var inputTxt = txtInput.value;
  fetch(getTranslationUrl(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      outputDiv.innerText = translatedTxt;
    })
btnTranslate.addEventListener("click", btnClickHandler);
