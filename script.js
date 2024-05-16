// function getFormvalue() {
//   //Write your code here
//   let inputs = document.querySelectorAll("input");
//   console.log(inputs);
//   let first_name = inputs[0].value;
//   let last_name = inputs[1].value;
//   let fullName = first_name + " " + last_name;
//   alert(fullName);
	
// }


function getFormvalue() {
  let first_name = document.getElementById("fname").value
  let last_name = document.getElementById("lname").value
  let fullName = first_name + " " + last_name;
  alert(fullName);
	
}