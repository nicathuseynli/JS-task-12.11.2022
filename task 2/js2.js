const ulFirst=document.querySelectorAll(".first");
const ulThird = document.querySelectorAll(".third")
const click = document.querySelector('.click');
function changeElement(){
    ulFirst.forEach(element => {
        element.textContent = "first"
    });
    ulThird.forEach(element => {
        element.textContent = "last"
    });
}
click.addEventListener('click',changeElement);
