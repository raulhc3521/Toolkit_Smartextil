// uncheck input navbar
var tool = document.getElementById("tool");

function uncheck() {
    tool.checked = false;
}

// Carrousel
var SlideTime = 4000;
var MyTimer = setInterval(slide, SlideTime);

var dot1Active = true;
var dot2Active = false;
var dot3Active = false;
var dot4Active = false;

var dot1 = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');
var dot4 = document.querySelector('.dot4');

var GalImg1 = document.querySelector('.galimg1');
var GalImg2 = document.querySelector('.galimg2');
var GalImg3 = document.querySelector('.galimg3');
var GalImg4 = document.querySelector('.galimg4');

function clearTimer() {
    clearInterval(MyTimer);
    MyTimer = setInterval(slide, SlideTime);
}
function clickdot1() {
    dot1.classList.add("active_dot");
    dot2.classList.remove("active_dot");
    dot3.classList.remove("active_dot");
    dot4.classList.remove("active_dot");
    GalImg1.classList.add("activeimg");
    GalImg2.classList.remove("activeimg");
    GalImg3.classList.remove("activeimg");
    GalImg4.classList.remove("activeimg");
}
function clickdot2() {
    dot2.classList.add("active_dot");
    dot1.classList.remove("active_dot");
    dot3.classList.remove("active_dot");
    dot4.classList.remove("active_dot");
    GalImg2.classList.add("activeimg");
    GalImg1.classList.remove("activeimg");
    GalImg3.classList.remove("activeimg");
    GalImg4.classList.remove("activeimg");
}
function clickdot3() {
    dot3.classList.add("active_dot");
    dot2.classList.remove("active_dot");
    dot1.classList.remove("active_dot");
    dot4.classList.remove("active_dot");
    GalImg3.classList.add("activeimg");
    GalImg2.classList.remove("activeimg");
    GalImg1.classList.remove("activeimg");
    GalImg4.classList.remove("activeimg");
}
function clickdot4() {
    dot4.classList.add("active_dot");
    dot2.classList.remove("active_dot");
    dot3.classList.remove("active_dot");
    dot1.classList.remove("active_dot");
    GalImg4.classList.add("activeimg");
    GalImg2.classList.remove("activeimg");
    GalImg3.classList.remove("activeimg");
    GalImg1.classList.remove("activeimg");
}

function slide() {
    if(dot1Active == true){
        document.getElementById('dot-2').click();
        return;
    }
}