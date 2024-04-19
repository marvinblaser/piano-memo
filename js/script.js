let tileA = document.querySelector(".tile-a");
let tileB = document.querySelector(".tile-b");
let tileC = document.querySelector(".tile-c");
let tileD = document.querySelector(".tile-d");
let noteA = document.querySelector(".note-a");
let noteB = document.querySelector(".note-b");
let noteC = document.querySelector(".note-c");
let noteD = document.querySelector(".note-d");
let noteDo = document.querySelector("#do");
let noteMi = document.querySelector("#mi");
let noteFa = document.querySelector("#fa");
let noteRe = document.querySelector("#re");
let untouchable = document.querySelector(".untouchable");
let start = document.querySelector(".start");
let startButton = document.querySelector(".start-button");
let blurPage = document.querySelector(".blur");
let lightTop = document.querySelector(".light-top");
let lightBottom = document.querySelector(".light-bottom");
let loosePage = document.querySelector(".loose");
let help = document.querySelector(".help");

startButton.addEventListener("click", ()=>{
  start.remove();
  blurPage.remove();
  // setTimeout(()=>{
  //     playing();
  // }, "1000")
});

document.querySelector(".back").addEventListener("click", ()=>{
  document.querySelector(".skip").style.display = "none";
})

help.addEventListener("click", ()=>{
  document.querySelector(".skip").style.display = "flex";
})