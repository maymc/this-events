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

/*var rankElem = document.getElementsByClassName("rank");

	rankElem[0].addEventListener('click', countClicks0);
	rankElem[1].addEventListener('click', countClicks1);
	rankElem[2].addEventListener('click', countClicks2);

var numClicks0= 0;
var numClicks1 = 0;
var numClicks2 = 0;
var count0 = document.createElement('p');
var count1 = document.createElement('p');
var count2 = document.createElement('p');

function countClicks0() {
	numClicks0 += 1;

	var thumbElem0 = this.querySelector('.thumb');
	count0.id = 'count1';
	count0.innerHTML = numClicks0;
	var thumbParent0 = document.getElementsByClassName('thumb');
	thumbParent0[0].appendChild(count0);

}

function countClicks1() {
	numClicks1 += 1;

	var thumbElem1 = this.querySelector('.thumb');
	count1.id = 'count1';
	count1.innerHTML = numClicks1;
	var thumbParent1 = document.getElementsByClassName('thumb');
	thumbParent1[1].appendChild(count1);	

}

function countClicks2() {

	numClicks2 += 1;
	var thumbElem2 = this.querySelector('.thumb');

	count2.id = 'count1';
	count2.innerHTML = numClicks2;
	var thumbParent2= document.getElementsByClassName('thumb');
	thumbParent2[2].appendChild(count2);
}*/



var thumbBtn = document.getElementsByClassName('thumb');
for(var i=0; i<thumbBtn.length; i++){
	thumbBtn[i].addEventListener('click', addPoint);

	//this creates the child element which will allow you to use the query selector all
	var counterElem = document.createElement('div');

	counterElem.className = "point";
	counterElem.innerHTML = "";

	thumbBtn[i].appendChild(counterElem);
}

function addPoint(){
	var countUp = this.querySelectorAll('.point')[0];
	countUp.innerHTML++;

}