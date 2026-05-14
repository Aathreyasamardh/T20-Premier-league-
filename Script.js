const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;

function drawGround() {
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "brown";
    ctx.fillRect(450,150,100,200);

    ctx.fillStyle = "white";
    ctx.fillRect(495,200,10,100);
}

drawGround();

function startGame(){
    alert("Starting Quick Match");
}

function iplMode(){
    alert("IPL Tournament Mode");
}

function worldCup(){
    alert("T20 World Cup");
}

function liveScores(){
    window.open("https://www.cricbuzz.com");
}

function multiplayer(){
    alert("Online Multiplayer Coming Soon");
}
