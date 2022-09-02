var buttonLength = document.querySelectorAll(".drum").length;

for(var i=0; i<buttonLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        makeAnimation(this.innerHTML);
    });
}

// var keyArray = ['l','j','s','a','a','','l','j','s','a','a','','l','j','s','a','a','','l','j','s','a','a','','l','j','s','a','a',''];
// // var keyArray = ['w','a','s','d','j','k','l'];

// // setInterval(function(){
// //     var randomKey = Math.floor(Math.random()*keyArray.length);
// //    makeSound(keyArray[randomKey]);
// //    console.log(keyArray[randomKey]);

// // },250);

// var i=0;

//  setInterval(function(){
//  var randomKey = Math.floor(Math.random()*keyArray.length);
//    makeSound(keyArray[i]);
//    i++;

//  },200);

document.addEventListener("keypress", function(e){
    var buttonKey = e.key;
    makeSound(buttonKey);
    makeAnimation(buttonKey);
});

function makeSound(buttonKey){
    switch(buttonKey){
        case 'w':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;    
        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;   
        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;   
        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;   
        case 'j':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        break;   
        case 'k':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;   
        case 'l':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;     
    }
}

function makeAnimation(key){
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}