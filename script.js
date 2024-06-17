function getFormvalue(){
	// let firstName = document.getElementById("fname").value;
	// let lastName = document.getElementById("lname").value;
	// let fullName = firstName + " " + lastName;
	const inputs = document.querySelectorAll("input");
	let firstName = inputs[0].value;
	let lastName = inputs[1].value;
	let fullName = firstName + " " + lastName;
	alert(fullName);
}