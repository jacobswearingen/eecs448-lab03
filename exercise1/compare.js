function compare(){
	let first = document.getElementById("first");
	let second = document.getElementById("second");
	let response1 = document.getElementById("response1");
	let response2 = document.getElementById("response2");

	if((first.value != second.value)&&((first.value.length < 8)||(second.value.length < 8))){
		response1.textContent = "•passwords entered do not match\n";
		response2.textContent += "•passwords should both contain 8 characters or more";
	}
	else if(first.value != second.value){
		response1.textContent = "•the passwords do not match\n";
	}
	else if((first.value.length < 8)||(second.value.length < 8)){
		response1.textContent = "•passwords should contain 8 characters or more\n";
	}
	else{
		response1.textContent = "Valid password!\n"
		response2.textContent = "";
	}
}
