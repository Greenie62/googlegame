var bone = document.querySelector(".bone");
var gameGrid = document.querySelector(".gamecontainer")


var bottomBoundary = parseInt(window.getComputedStyle(gameGrid).getPropertyValue("top")) + 400


function floatBone(){
    console.log(parseInt(window.getComputedStyle(gameGrid).getPropertyValue("top")) + 400)

}


floatBone()