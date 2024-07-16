function getFormvalue(){
	// const inps = document.querySelectorAll("input");
	// let firstName = inps[0].value;
	// let lastName = inps[1].value;
	let firstName = document.getElementById("fname").value
	let lastName = document.getElementById("lname").value
	let fullName = firstName + " " + lastName;
	alert(fullName)
}