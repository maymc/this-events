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

var newMenuElem = document.getElementsByClassName("name");

for(var j=0; j<newMenuElem.length; j++){
	newMenuElem[j].addEventListener('click', showHideMenu);
}

function showHideMenu(){
	var pElem = this.querySelectorAll('.menu')[0];

	if(pElem.style.display==="none")
		pElem.style.display = "block";
	else
		pElem.style.display = "none";
}


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/

var rankElem = document.getElementsByClassName("rank");

for(var k=0; k<rankElem.length; k++){
	rankElem[k].addEventListener('click', countClicks);
}



var numClicks= 0;
var count = document.createElement('p');

function countClicks(){
	var thumbElem = this.querySelectorAll('.thumb')[0];

	numClicks += 1;
	console.log(numClicks);

	count.id = 'count';
	count.innerHTML = numClicks;
	var thumbParent = document.getElementsByClassName('thumb');
	thumbParent[0].appendChild(count);
}





/*var numClicks1= 0;
var numClicks2 = 0;
var numClicks3 = 0;
var count1 = document.createElement('p');
var count2 = document.createElement('p');
var count3 = document.createElement('p');

function countClicks(){
	var thumbElem = this.querySelectorAll('.thumb')[0];

	numClicks1 += 1;
	numClicks2 += 1;
	numClicks3 += 1;

	count1.id = 'count1';
	count1.innerHTML = numClicks1;
	var thumbParent1 = document.getElementsByClassName('thumb');
	thumbParent1[0].appendChild(count1);	

	count2.id = 'count1';
	count2.innerHTML = numClicks2;
	var thumbParent2 = document.getElementsByClassName('thumb');
	thumbParent2[1].appendChild(count2);	

	count3.id = 'count1';
	count3.innerHTML = numClicks3;
	var thumbParent3 = document.getElementsByClassName('thumb');
	thumbParent3[2].appendChild(count3);


}*/
