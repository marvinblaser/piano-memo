let tiles = document.querySelectorAll(".tile");
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

function untouchableWhenOff(){
    if(lightTop.classList[2] == "off"){
        untouchable.style.zIndex = 2;
    }
}

// do do do re do sol do do do re do sol
// base do re mi fa so la si do
// mi mi mi fa mi do | mi mi mi fa mi do
function playing(){
    roundOne();
}

function roundOne(){
    if(!lightTop.classList[2]){
        lightTop.classList.add("off");
    }
    noteC.classList.add("note-playing");
    setTimeout(()=>{
        noteC.classList.remove("note-playing");
    }, "1000")
    setTimeout(()=>{
        lightTop.classList.remove("off");
        lightBottom.classList.add("on");
        untouchable.style.zIndex = -1;
    }, "1200")
    noteMi.play();
    tileA.addEventListener("click", ()=>{
        setTimeout(()=>{
            loosePage.classList.toggle("flex")
        }, 200)
    })
    tileB.addEventListener("click", ()=>{
        setTimeout(()=>{
            loosePage.classList.toggle("flex")
        }, 200)
    })
    tileD.addEventListener("click", ()=>{
        setTimeout(()=>{
            loosePage.classList.toggle("flex")
        }, 200)
    })
    tileC.addEventListener("click", ()=>{
        roundTwo();
    })
}

function roundTwo(){
    lightBottom.classList.remove("on");
    if(!lightTop.classList[2]){
        lightTop.classList.add("off");
    }
    setTimeout(()=>{
        noteC.classList.add("note-playing");
    }, "500")
    noteC.classList.add("note-playing");
    setTimeout(()=>{
        noteC.classList.remove("note-playing");
    }, "1500")
    setTimeout(()=>{
        noteC.classList.add("note-playing");
    }, "1600")
    setTimeout(()=>{
        noteC.classList.remove("note-playing");
    }, "2600")
    setTimeout(()=>{
        lightTop.classList.remove("off");
        lightBottom.classList.add("on");
        untouchable.style.zIndex = -1;
    }, "1200")
    noteMi.play();
    tileA.addEventListener("click", ()=>{
        setTimeout(()=>{
            loosePage.classList.toggle("flex")
        }, 200)
    })
    tileB.addEventListener("click", ()=>{
        setTimeout(()=>{
            loosePage.classList.toggle("flex")
        }, 200)
    })
    tileD.addEventListener("click", ()=>{
        setTimeout(()=>{
            loosePage.classList.toggle("flex")
        }, 200)
    })
}