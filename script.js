// const form = document.getElementById("form-container");
// const list = document.getElementById("list");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const title = document.getElementById("assignment_name").value;

//   const newItem = document.createElement("p");
//   newItem.textContent = title;

//   list.appendChild(newItem);

//   form.reset();
// });
const title= document.getElementsByClassName("counter");
const tap= document.getElementById("count");
const increase=document.getElementById("increase")
const decrease=document.getElementById("decrease")

increase.addEventListener ("click", function (event) {
    event.preventDefault();
    tap.textContent=parseInt(tap.textContent)+1;

});