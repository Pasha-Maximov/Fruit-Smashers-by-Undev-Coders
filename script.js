const canvas = document.getElementById('gameCanvas');

const ctx = canvas.getContext('2d');


const WIDTH = 1115;
const HEIGHT = 650;
canvas.width = WIDTH;
canvas.height = HEIGHT;
const WIDTH2 = 350;
const HEIGHT2 = 600;




let subcanvas = []



function drawsubcanvas() {
    subcanvas.forEach((subcanvas) => {
        ctx.fillStyle = 'white';
        ctx.fillRect(subcanvas.x, subcanvas.y, subcanvas.width, subcanvas.height);
    });
}




ctx6.fillStyle = 'white';
ctx6.font = '20px Arial';
ctx6.textAlign = 'center';





