// window alert
window.alert('TADA! Welcome to my MAPHub....Enjoy');

//comfirmation

function myFunction (event) {
    var message = 'Are you sure you want to continue?';
    action =confirm(message) ? true : event.preventDefault ();
}
var aElems = document.getElementsByTagName('a');
for (var i=0, len = aElems.length; i <len; i++){
    aElems[i].onclick('click', myFunction)
}