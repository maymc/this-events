//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var naviElem = document.getElementsByClassName("navi");

for(var i=0; i<naviElem.length; i++){
	naviElem[i].addEventListener("click", showHide);
}

function showHide(){
	var innerElem = this.querySelectorAll('.inner')[0];
	if(innerElem.style.display === "none")
		innerElem.style.display = "block";
	else
		innerElem.style.display = "none";
}


/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameElem = document.getElementsByClassName("name");

for(var i=0; i<nameElem.length; i++){
	nameElem[i].addEventListener("click", toggle);
}

function toggle(){
	var menuElem = this.querySelectorAll(".menu")[0];
	if(menuElem.style.display === "none")
		menuElem.style.display = "block";
	else
		menuElem.style.display = "none";
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var thumbElem = document.getElementsByClassName("thumb");

for(var i=0; i<thumbElem.length; i++){
	thumbElem[i].addEventListener("click", thumbsUp);

	var counter = document.createElement("div");
	counter.className = "countThumbs";
	thumbElem[i].appendChild(counter);
}

function thumbsUp(){
	var counterElem = this.querySelectorAll(".countThumbs")[0];
	counterElem.innerHTML++;

}


