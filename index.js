var numbeOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numbeOfDrumButtons; i++) {

document.querySelectorAll (".drum")[i].addEventListener("click", function ()  {
	// alert("I got Clicked");
	
	var audio = new Audio("sounds/tom-1.mp3");
	  audio.play(); 
 		
 	 // this.style.color = "white";	
 	 	
	
});

}



// var audio = new Audio('sounds/tom-1.mp3');
	// audio.play(); 

// var housekeeper1 = new HouseKeeper 

function HouseKeeper (yearsOfExperience, name, cleanningExperties) {
	this.yearsOfExperience = yearsOfExperience;
	this.name = name;
	this.cleanningExperties = cleanningExperties;
}

var housekeeper1 new HouseKeeper(9, "tom", ["lobby"," bedroom"]);
console.log(housekeeper1.name);
console.log(housekeeper1.yearsOfExperience);

ar housekeeper2 new HouseKeeper(19, "tomy", ["lobby",