var x=document.getElementById('login');
var y=document.getElementById("register");
var z=document.getElementById('btn');
function register()
{
 x.style.left='-400px';
 y.style.left='50px';
 z.style.left='110px';
}
function login()
{
x.style.left='50px';
 y.style.left='450px';
 z.style.left='0px';
}

var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
         modal.style.display = "none";
    }
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}