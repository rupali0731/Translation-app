var btntranslate=document.querySelector("#translatebtn");
var textinput=document.querySelector("#inputtxt");
var textoutput=document.querySelector("#outputtxt");
var serverUrl="https://api.funtranslations.com/translate/minion.json";
function gettranslatedUrl(input){
    return (serverUrl+"?"+"text="+input);}
    
function errorhandler(error){
    console.log("Error occured.Try again later",error);
    alert("sorry,something wrong happened.try again later ");
}
function clickhandler(){
    var inputtext=textinput.value;
    fetch(gettranslatedUrl(inputtext))
    .then(response=>response.json())
    .then(json=>
    { var translatedtext=json.contents.translated
        textoutput.innerText=translatedtext;
    })
    .catch(errorhandler)
};
btntranslate.addEventListener("click",clickhandler);