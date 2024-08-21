function getFormvalue(){
	// const name1 = document.getElementById("fname");
	// const name2 = document.getElementById("lname");
	// alert(name1.value + " " + name2.value);

	let inps = document.querySelectorAll("input");
	let first_name = inps[0].value;
	let last_name = inps[1].value;
	alert(first_name + " " + last_name)
}