let tiles = document.querySelectorAll(".tile");
let tileA = document.querySelector(".tile-a");
let tileB = document.querySelector(".tile-b");
let tileC = document.querySelector(".tile-c");
let tileD = document.querySelector(".tile-d");
let noteDo = document.querySelector("#do");
let noteMi = document.querySelector("#mi");
let noteFa = document.querySelector("#fa");
let noteRe = document.querySelector("#re");
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
    setTimeout(()=>{
        playing();
    }, "1000")
});

tileA.addEventListener("click", ()=>{
    noteDo.play();
});
tileB.addEventListener("click", ()=>{
    noteRe.play();
});
tileC.addEventListener("click", ()=>{
    noteMi.play();
});
tileD.addEventListener("click", ()=>{
    noteFa.play();
});


// do do do re do sol do do do re do sol
// base do re mi fa so la si do
// mi mi mi fa mi do | mi mi mi fa mi do
function playing(){
    
}