var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/kraut.json";

function getTranslationUrl(text) {
  return serverUrl + "?" + "text= " + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with server! try agin after some time.");
}

function btnClickHandler() {
  var inputTxt = txtInput.value;
  fetch(getTranslationUrl(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      outputDiv.innerText = translatedTxt;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", btnClickHandler);
