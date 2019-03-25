var numbeOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numbeOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function ()  {
	alert("I got Clicked");
}); 

}