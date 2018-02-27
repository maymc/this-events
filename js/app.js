//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navMenuElem = document.getElementsByClassName("navi");

for(var i=0; i<navMenuElem.length; i++){
	navMenuElem[i].addEventListener('click', showHide);
}

function showHide(){
	var aElem= this.querySelectorAll('.inner')[0];

	if(aElem.style.display==="none"){
		aElem.style.display = 'block';
  	}
	
	else{
		aElem.style.display='none';
	}
}


/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/




/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
