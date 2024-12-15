
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let control_Icon = document.getElementById("control_Icon");

song.onloadedmetadata = function(){

    progress.max = song.duration;
    progress.value = song.currentTime;


}


function playPause() {

    if(control_Icon.classList.contains("fa-pause")) {

        song.pause();
        control_Icon.classList.remove("fa-pause")
        control_Icon.classList.add("fa-play")


    }
    else {

        song.play();
        control_Icon.classList.add("fa-pause");
        control_Icon.classList.remove("fa-play")

    
    }


}


if(song.play()) {

    setInterval(()=>{

        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){


    song.play();
    song.currentTime = progress.value;

    control_Icon.classList.add("fa-pause");
    control_Icon.classList.remove("fa-play");





}