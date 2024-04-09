let tiles = document.querySelectorAll(".tile");
let untouchable = document.querySelector(".untouchable");
let start = document.querySelector(".start");
let startButton = document.querySelector(".start-button");
let blurPage = document.querySelector(".blur");

tiles.forEach(tile =>{
    tile.addEventListener("click", ()=>{
        tile.classList.add("tileClicked");
        untouchable.style.zIndex = 2;
        setTimeout(() => {
            tile.classList.remove("tileClicked");
        }, "500");
        setTimeout(() => {
            untouchable.style.zIndex = -1;
        }, "700");
    })
})

startButton.addEventListener("click", ()=>{
    start.remove();
    blurPage.remove();
})