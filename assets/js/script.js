// uncheck input navbar
var tool = document.getElementById("tool");

function uncheck() {
    tool.checked = false;
    if(SlideOn == false) {
        SlideOn = true;
        MyTimer = setInterval(slide, SlideTime);
    }
}

function SlideUncheck(){
    if(tool.checked == true){
        clearInterval(MyTimer);
        SlideOn = false;
        alert("holi");

    }
    else{
        MyTimer = setInterval(slide, SlideTime);
        SlideOn = true;
    }
}

// Carrousel
var SlideOn = true;

function StopSlide() {
    clearInterval(MyTimer);
    SlideOn = false;

}

var SlideTime = 4000;
var Yposition = 10;
var MyTimer = setInterval(slide, SlideTime);

var dot1Active = true;
var dot2Active = false;
var dot3Active = false;
var dot4Active = false;
var dot5Active = false;
var dot6Active = false;

var dot1 = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');
var dot4 = document.querySelector('.dot4');
var dot5 = document.querySelector('.dot5');
var dot6 = document.querySelector('.dot6');

function dot1_active() {
    if(dot1Active == false){
        dot1Active = true;
        dot2Active = false;
        dot3Active = false;
        dot4Active = false;
        dot5Active = false;
        dot6Active = false;
        dot1.classList.add("active_dot");
        dot2.classList.remove("active_dot");
        dot3.classList.remove("active_dot");
        dot4.classList.remove("active_dot");
        dot5.classList.remove("active_dot");
        dot6.classList.remove("active_dot");
        clearTimer();
    }
}
function dot2_active() {
    if(dot2Active == false){
        dot2Active = true;
        dot1Active = false;
        dot3Active = false;
        dot4Active = false;
        dot5Active = false;
        dot6Active = false;
        dot1.classList.remove("active_dot");
        dot2.classList.add("active_dot");
        dot3.classList.remove("active_dot");
        dot4.classList.remove("active_dot");
        dot5.classList.remove("active_dot");
        dot6.classList.remove("active_dot");
        clearTimer();
    }
}
function dot3_active() {
    if(dot3Active == false){
        dot3Active = true;
        dot2Active = false;
        dot1Active = false;
        dot4Active = false;
        dot5Active = false;
        dot6Active = false;
        dot1.classList.remove("active_dot");
        dot2.classList.remove("active_dot");
        dot3.classList.add("active_dot");
        dot4.classList.remove("active_dot");
        dot5.classList.remove("active_dot");
        dot6.classList.remove("active_dot");
        clearTimer();
    }
}
function dot4_active() {
    if(dot4Active == false){
        dot4Active = true;
        dot2Active = false;
        dot3Active = false;
        dot1Active = false;
        dot5Active = false;
        dot6Active = false;
        dot1.classList.remove("active_dot");
        dot2.classList.remove("active_dot");
        dot3.classList.remove("active_dot");
        dot4.classList.add("active_dot");
        dot5.classList.remove("active_dot");
        dot6.classList.remove("active_dot");
        clearTimer();
    }
}
function dot5_active() {
    if(dot5Active == false){
        dot5Active = true;
        dot2Active = false;
        dot3Active = false;
        dot4Active = false;
        dot1Active = false;
        dot6Active = false;
        dot1.classList.remove("active_dot");
        dot2.classList.remove("active_dot");
        dot3.classList.remove("active_dot");
        dot4.classList.remove("active_dot");
        dot5.classList.add("active_dot");
        dot6.classList.remove("active_dot");
        clearTimer();
    }
}
function dot6_active() {
    if(dot6Active == false){
        dot6Active = true;
        dot2Active = false;
        dot3Active = false;
        dot4Active = false;
        dot5Active = false;
        dot1Active = false;
        dot1.classList.remove("active_dot");
        dot2.classList.remove("active_dot");
        dot3.classList.remove("active_dot");
        dot4.classList.remove("active_dot");
        dot5.classList.remove("active_dot");
        dot6.classList.add("active_dot");
        clearTimer();
    }
}

function clearTimer() {
    clearInterval(MyTimer);
    MyTimer = setInterval(slide, SlideTime);
}

function slide() {
    if(dot1Active == true && scrollY < Yposition){
        document.getElementById('dot-2').click();
        return;
    }
    if(dot2Active == true && scrollY < Yposition){
        document.getElementById('dot-3').click();
        return;
    }
    if(dot3Active == true && scrollY < Yposition){
        document.getElementById('dot-4').click();
        return;
    }
    if(dot4Active == true && scrollY < Yposition){
        document.getElementById('dot-5').click();
        return;
    }
    if(dot5Active == true && scrollY < Yposition){
        document.getElementById('dot-6').click();
        return;
    }
    if(dot6Active == true && scrollY < Yposition){
        document.getElementById('dot-1').click();
        return;
    }
}

