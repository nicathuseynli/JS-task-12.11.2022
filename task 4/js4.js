let data = ['apple', 'banana', 'tomato',' orange '];
let list = document.getElementById("task4");
data.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
})