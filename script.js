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
const count= document.getElementById("count");
const add=document.getElementById("increase")
add.addEventListener ("click", function (event) {
count.textContent=parseInt(count.textContent)+1;

});
 
const read= document.getElementById("count");
const sub= document.getElementById("decrease");

sub.addEventListener("click", function(hi){
 count.textContent=parseInt(count.textContent)+1;
   
}
);
 

