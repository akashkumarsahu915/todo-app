let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = inp.value;
    item.style.fontSize = "30px";
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});


ul.addEventListener("click", (event) => {
    if (event.target.nodeName == "BUTTON") {
        let tarItem = event.target.parentElement;
        tarItem.remove();
        console.log("item deleted");
    }
});