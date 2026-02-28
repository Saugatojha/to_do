// take input from user
const form=document.getElementById("form-container");
const name=document.getElementById("assignment_name");
const course=document.getElementById("course_name");
const duedate=document.getElementById("duedate");
// read the input taken by user 
form.addEventListener("submit", function(event){
   event.preventDefault();
// Read what user typed
   const assignmentName = name.value;   
   const courseName = course.value;     
   const dueDate = duedate.value;      

// display the input in console
console.log(assignmentName);
console.log(courseName);
console.log(dueDate);
});


