let tiles = document.querySelectorAll(".tile");
let untouchable = document.querySelector(".untouchable");

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