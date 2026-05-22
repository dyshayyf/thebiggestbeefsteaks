const music = document.getElementById("bgmusic");

window.addEventListener("load", () => {

    const savedTime = localStorage.getItem("music-time");

    if(savedTime){
        music.currentTime = savedTime;
    }

    music.play();

    setInterval(() => {
        localStorage.setItem("music-time", music.currentTime);
    }, 1000);

});