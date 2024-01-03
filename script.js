const submitButton=document.querySelector("#submit-btn");
const main=document.querySelector("#main");
const rating=document.querySelector("#rating");
const myRat1=document.querySelector("#myrat1");
const myRat2=document.querySelector("#myrat2");
const myRat3=document.querySelector("#myrat3");
const myRat4=document.querySelector("#myrat4");
const myRat5=document.querySelector("#myrat5");
const thankYou=document.querySelector("#thank-you");
myRat1.onclick=function displayrating() {rating.innerText=myRat1.value;
    submitButton.onclick=thankyou;};
myRat2.onclick=function displayrating() {rating.innerText=myRat2.value;
    submitButton.onclick=thankyou;};
myRat3.onclick=function displayrating() {rating.innerText=myRat3.value;
    submitButton.onclick=thankyou;};
myRat4.onclick=function displayrating() {rating.innerText=myRat4.value;
        submitButton.onclick=thankyou;};
myRat5.onclick=function displayrating() {rating.innerText=myRat5.value;
            submitButton.onclick=thankyou;};
            
  
function thankyou(){
    thankYou.style.display="block";
    main.style.display="none";
}