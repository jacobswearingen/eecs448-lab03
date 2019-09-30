function add(x){
	title = document.getElementById("image").title;
	total = (title*1+x*1 < 0) ? 5 : (title*1+x*1)%6;
	document.getElementById("image").src = "image" + total + ".jpeg";
	document.getElementById("image").title = total;
}
