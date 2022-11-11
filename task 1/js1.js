const blogTitle = document.querySelector("blogTitle");
const blogBody = document.querySelector("blogBody");
const author = document.querySelector("author");
const number = document.querySelector("number");
const email = document.querySelector("email");

let blogTitle = id("blogTitle");
let blogBody = id("blogBody");
let author = id("author");
let number = id("number");
let email = id("email");

let erroMsg = classes("error");

blogBody.addEventListener("submit", (e)=>{e.preventDefault()});
engine = (blogBody,"aaa");

let engine = (id,message) => {
    if(id.value.trim() === ""){
        erroMsg(id).innerHTML = message;
        id.style.border = "2px solid red";
    }
}
function myFunction() {
    let x = document.getElementsByClassName("blogBody");
    let text;
    if (isNaN(x) || x<2 || x>20){
        text = "Text has to be between 2 and 20 characters long"
    }
    else{
        text = "Input OK"
    }
}
function validate(){
    let blogBody = document.getElementById('blogBody').value;
    let error = document.getElementsByClassName('error');
    if (blogBody.length < 2){
        error.textContent = "Text has to be between 2 and 20 characters long";
        return false;
    }
    else{
        error.textContent="";
    }
}
const blogBody = document.getElementById('blogBody');
const author = document.getElementById('author');
const number = document.getElementById('number');
const email = document.getElementById('email');

blogBody.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
})
function checkInputs(){
   const blogBodyValue= blogBody.value.trim();
   const authorValue=author.value.trim();
   const numberValue= number.value.trim();
   const emailValue=email.value.trim();

   if(blogBodyValue === ''){
    setErrorFor(blogBody,'Text has to be between 2 and 20 characters long')
   }
   else{}
}
function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function myFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "/task1/task4 logo/task.png");
  }

