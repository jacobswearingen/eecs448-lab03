function compare(){
	let first = document.getElementById("first");
	let second = document.getElementById("second");
	let response = document.getElementById("response");
	if((first.value != second.value)&&((first.value.length < 8)||(second.value.length < 8))){
		response.textContent = "•passwords entered do not match\n";
		response.textContent += "•passwords should both contain 8 characters or more";
	}
	else if(first.value != second.value){
		response.textContent = "•the passwords do not match\n";
	}
	else if((first.value.length < 8)||(second.value.length < 8)){
		response.textContent = "•passwords should contain 8 characters or more\n";
	}
	else{
		response.textContent = "Valid password!\n"
	}
}
