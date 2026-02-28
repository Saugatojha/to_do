// Step 1: Grab the elements from the HTML
let multiply=document.getElementById("multiply");
let divide=document.getElementById("divide");
let displaycount=document.getElementById("count");

// Step 2: Store the number in a variable
let count=1;

// Step 3: When multiply is clicked, double the number
multiply.addEventListener("click", function(){
count=count*2;
  displaycount.textContent = count;
});

// Step 4: When divide is clicked, halve the number
divide.addEventListener("click", function(){
    count= count/2;
    displaycount.textContent=count;
})