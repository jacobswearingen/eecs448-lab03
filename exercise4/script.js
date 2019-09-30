//	border-color: rgb("bord_red()", "bord_green()", "bord_blue()");

function press(){
	let edgy = document.getElementById("edgy");

	let bord_red = document.getElementById("bord_red").value;
	let bord_green = document.getElementById("bord_green").value;
	let bord_blue = document.getElementById("bord_blue").value;
	let bord_width = (isNaN(document.getElementById("bord_width").value)  ? "auto" : document.getElementById("bord_width").value);

	let back_red = document.getElementById("back_red").value;
	let back_green = document.getElementById("back_green").value;
	let back_blue = document.getElementById("back_blue").value;

	edgy.style.borderColor = "rgb("+bord_red+"," +bord_green+","+ bord_blue+")";
	edgy.style.width = bord_width;
	edgy.style.backgroundColor = "rgb("+back_red+"," +back_green+","+ back_blue+")";

}
