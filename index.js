var buttonClick = document.querySelectorAll(".drum");
for(var i = 0;i<buttonClick.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonHTML = this.innerHTML;
        keyPressed(buttonHTML);
        buttonAnimation(buttonHTML);
    });
}
document.addEventListener("keydown",function(event){
    var keyInDown = event.key;
    keyPressed(keyInDown);
    buttonAnimation(keyInDown);
});

function keyPressed(key){
    switch (key) {
        case "w":
            var tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 =new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 =new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 =new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash =new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick =new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare =new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(buttonHTML);
            break;
    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}





































/*var buttonsLength = document.querySelectorAll(".drum").length;
for(var i=0;i<buttonsLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var wordInButton = this.innerHTML;
        soundKey(wordInButton);
        buttonAnimation(wordInButton);      
    });
}
document.addEventListener("keydown",function (event){
    var charPressed =event.key;
    soundKey(charPressed);
    buttonAnimation(charPressed);
});
function soundKey(eventHandle){
    switch (eventHandle) {
        case "w":
            var tom1Key = new Audio("sounds/tom-1.mp3");
            tom1Key.play();
            break;
        case "a":
            var tom2Key = new Audio("sounds/tom-2.mp3");
            tom2Key.play();
            break;
        case "s":
            var tom3Key = new Audio("sounds/tom-3.mp3");
            tom3Key.play();
            break;
        case "d":
            var tom4Key = new Audio("sounds/tom-4.mp3");
            tom4Key.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(eventHandle);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
*/




