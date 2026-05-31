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

document.addEventListener("mousemove", (e) => {

    // bikin spark lebih sering (lebih banyak)
    if (Math.random() > 0.65) return;

    const spark = document.createElement("div");
    spark.classList.add("spark");

    const colors = ["#ffffff", "#ffd700", "#ffb347"];

    // posisi cursor
    const x = e.clientX;
    const y = e.clientY;

    spark.style.left = x + "px";
    spark.style.top = y + "px";

    // ukuran random
    spark.style.width = (Math.random() * 5 + 2) + "px";
    spark.style.height = spark.style.width;

    // warna random (MULTICOLOR)
    const color = colors[Math.floor(Math.random() * colors.length)];
    spark.style.background = color;
    spark.style.boxShadow = `0 0 6px ${color}, 0 0 12px ${color}`;

    // kadang jadi star ✦
    if (Math.random() > 0.8) {
        spark.innerHTML = "✦";
        spark.style.background = "transparent";
        spark.style.color = color;
        spark.style.display = "flex";
        spark.style.alignItems = "center";
        spark.style.justifyContent = "center";
    }

    // movement random
    const dx = (Math.random() - 0.5) * 30;
    const dy = (Math.random() - 0.5) * 30;

    spark.style.setProperty("--move", `translate(${dx}px, ${dy}px)`);

    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 500);

});