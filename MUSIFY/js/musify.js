// under progress

let song1 = new Audio("music/1.mp3");
// song.play();
let song2 = new Audio("music/2.mp3");
let song3 = new Audio("music/3.mp3");
let song4 = new Audio("music/4.mp3");
let songarr={"music/1.mp3","music/2.mp3","music/3.mp3","music/4.mp3"};

function playsong(name){
    let audio=new Audio("music/"+name+".mp3");
    audio.play();
}

function play(){

    for(let i=0;i<=4;i++){
    playsong(i);
    }
}


// function one() {
//     song1.play();

// }

// function two() {
//     song2.play();
// }

// function three() {
//     song3.play();
// }

// function four() {
//     song4.play();
// }

// function lol(){
//     song1.pause();
// }

// function pause1(){
//     song1.pause();
// }
// function pause2(){
//     song2.pause();
// }
// function pause3(){
//     song3.pause();
// }
// function pause4(){
//     song4.pause();
// }

// function playsong(plysong){
    
//     plysong.play();
// }






let aud = new Audio ('music/1.mp3');

function playpause(){
    // document.getElementById('masterplay').innerHTML = "hi";
    if(aud.paused||aud.currentTime<=0){
      playsong()
    document.getElementById('masterplay').classList.remove('fa-play-circle');
    document.getElementById('masterplay').classList.add('fa-pause-circle');
}
    else {
        aud.pause();
    document.getElementById('masterplay').classList.remove('fa-pause-circle');
    document.getElementById('masterplay').classList.add('fa-play-circle');
    }
}

let count=0;

function forwardPlay(){

let musify={"1.mp3","2.mp3","3.mp3","4.mp3"};






}



