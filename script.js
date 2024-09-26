const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


const WIDTH = 1115;
const HEIGHT = 650;
canvas.width = WIDTH;
canvas.height = HEIGHT;

const bowlphase0 = new Image();
bowlphase0.src = 'bowlphase0.png';

const bowlphase1 = new Image();
bowlphase1.src = 'bowlphase1.png';


let bowlheight = 200
let bowlwidth = 200
let bowlX = 0
let bowlY = 0

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(400, 25, 315, 600);

    ctx.fillStyle = 'green';
    ctx.fillRect(757.5, 25, 315, 600);

    ctx.fillStyle = 'green';
    ctx.fillRect(42.5, 25, 315, 600);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.5';
    ctx.fillRect(770, 50, 140, 560);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.5';
    ctx.fillRect(920, 50, 140, 560);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.5';
    ctx.fillRect(413, 50, 290, 280);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.5';
    ctx.fillRect(413, 355, 290, 260);


    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(425, 360, 4, 54);
    ctx.fillRect(425, 360, 54, 4);
    ctx.fillRect(475, 360, 4, 54);
    ctx.fillRect(425, 410, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(495, 360, 4, 54);
    ctx.fillRect(495, 360, 54, 4);
    ctx.fillRect(545, 360, 4, 54);
    ctx.fillRect(495, 410, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(565, 360, 4, 54);
    ctx.fillRect(565, 360, 54, 4);
    ctx.fillRect(615, 360, 4, 54);
    ctx.fillRect(565, 410, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(635, 360, 4, 54);
    ctx.fillRect(635, 360, 54, 4);
    ctx.fillRect(685, 360, 4, 54);
    ctx.fillRect(635, 410, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(425, 430, 4, 54);
    ctx.fillRect(425, 430, 54, 4);
    ctx.fillRect(475, 430, 4, 54);
    ctx.fillRect(425, 480, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(495, 430, 4, 54);
    ctx.fillRect(495, 430, 54, 4);
    ctx.fillRect(545, 430, 4, 54);
    ctx.fillRect(495, 480, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(565, 430, 4, 54);
    ctx.fillRect(565, 430, 54, 4);
    ctx.fillRect(615, 430, 4, 54);
    ctx.fillRect(565, 480, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(635, 430, 4, 54);
    ctx.fillRect(635, 430, 54, 4);
    ctx.fillRect(685, 430, 4, 54);
    ctx.fillRect(635, 480, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(425, 500, 4, 54);
    ctx.fillRect(425, 500, 54, 4);
    ctx.fillRect(475, 500, 4, 54);
    ctx.fillRect(425, 550, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(495, 500, 4, 54);
    ctx.fillRect(495, 500, 54, 4);
    ctx.fillRect(545, 500, 4, 54);
    ctx.fillRect(495, 550, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(565, 500, 4, 54);
    ctx.fillRect(565, 500, 54, 4);
    ctx.fillRect(615, 500, 4, 54);
    ctx.fillRect(565, 550, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(635, 500, 4, 54);
    ctx.fillRect(635, 500, 54, 4);
    ctx.fillRect(685, 500, 4, 54);
    ctx.fillRect(635, 550, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(425, 570, 4, 54);
    ctx.fillRect(425, 570, 54, 4);
    ctx.fillRect(475, 570, 4, 54);
    ctx.fillRect(425, 620, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(495, 570, 4, 54);
    ctx.fillRect(495, 570, 54, 4);
    ctx.fillRect(545, 570, 4, 54);
    ctx.fillRect(495, 620, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(565, 570, 4, 54);
    ctx.fillRect(565, 570, 54, 4);
    ctx.fillRect(615, 570, 4, 54);
    ctx.fillRect(565, 620, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(635, 570, 4, 54);
    ctx.fillRect(635, 570, 54, 4);
    ctx.fillRect(685, 570, 4, 54);
    ctx.fillRect(635, 620, 54, 4);
    //------------------------------------------------------------------------------//
    //shop//
    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(425, 55, 4, 54);
    ctx.fillRect(425, 55, 54, 4);
    ctx.fillRect(475, 55, 4, 54);
    ctx.fillRect(425, 105, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(495, 55, 4, 54);
    ctx.fillRect(495, 55, 54, 4);
    ctx.fillRect(545, 55, 4, 54);
    ctx.fillRect(495, 105, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(565, 55, 4, 54);
    ctx.fillRect(565, 55, 54, 4);
    ctx.fillRect(615, 55, 4, 54);
    ctx.fillRect(565, 105, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(635, 55, 4, 54);
    ctx.fillRect(635, 55, 54, 4);
    ctx.fillRect(685, 55, 4, 54);
    ctx.fillRect(635, 105, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(425, 125, 4, 54);
    ctx.fillRect(425, 125, 54, 4);
    ctx.fillRect(475, 125, 4, 54);
    ctx.fillRect(425, 175, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(495, 125, 4, 54);
    ctx.fillRect(495, 125, 54, 4);
    ctx.fillRect(545, 125, 4, 54);
    ctx.fillRect(495, 175, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(565, 125, 4, 54);
    ctx.fillRect(565, 125, 54, 4);
    ctx.fillRect(615, 125, 4, 54);
    ctx.fillRect(565, 175, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(635, 125, 4, 54);
    ctx.fillRect(635, 125, 54, 4);
    ctx.fillRect(685, 125, 4, 54);
    ctx.fillRect(635, 175, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(425, 195, 4, 54);
    ctx.fillRect(425, 195, 54, 4);
    ctx.fillRect(475, 195, 4, 54);
    ctx.fillRect(425, 245, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(495, 195, 4, 54);
    ctx.fillRect(495, 195, 54, 4);
    ctx.fillRect(545, 195, 4, 54);
    ctx.fillRect(495, 245, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(565, 195, 4, 54);
    ctx.fillRect(565, 195, 54, 4);
    ctx.fillRect(615, 195, 4, 54);
    ctx.fillRect(565, 245, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(635, 195, 4, 54);
    ctx.fillRect(635, 195, 54, 4);
    ctx.fillRect(685, 195, 4, 54);
    ctx.fillRect(635, 245, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(425, 265, 4, 54);
    ctx.fillRect(425, 265, 54, 4);
    ctx.fillRect(475, 265, 4, 54);
    ctx.fillRect(425, 315, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(495, 265, 4, 54);
    ctx.fillRect(495, 265, 54, 4);
    ctx.fillRect(545, 265, 4, 54);
    ctx.fillRect(495, 315, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(565, 265, 4, 54);
    ctx.fillRect(565, 265, 54, 4);
    ctx.fillRect(615, 265, 4, 54);
    ctx.fillRect(565, 315, 54, 4);

    ctx.fillStyle = 'rgba(200, 200, 200, 1';
    ctx.fillRect(635, 265, 4, 54);
    ctx.fillRect(635, 265, 54, 4);
    ctx.fillRect(685, 265, 4, 54);
    ctx.fillRect(635, 315, 54, 4);

    ctx.fillStyle = 'white'
    ctx.font= '25px bold arial'
    ctx.fillText('Achievements', 485, 350);

    ctx.fillStyle = 'white'
    ctx.font= '25px bold arial'
    ctx.fillText('Shop', 530, 44);

    ctx.fillStyle = 'white'
    ctx.font= '25px bold arial'
    ctx.fillText('Uprgades', 792, 44);

    ctx.fillStyle = 'white'
    ctx.font= '25px bold arial'
    ctx.fillText('Fruit', 965, 46);

    ctx.fillStyle = 'white'
    ctx.font= '30px bold arial'
    ctx.fillText('______`s Fruit Salad', 80, 70);

    ctx.fillStyle = 'white'
    ctx.font= '28px bold arial'
    ctx.fillText('_{amount}_ _{currency/units}_', 90, 120);


    ctx.drawImage(bowlphase0, bowlX, bowlY, bowlheight, bowlheight)

}




canvas.addEventListener('click', function(event) {
    console.log(getMousePos(canvas, event))
    const mousepos = getMousePos(canvas, event)
    if(
        bowlX < mousepos.x && mousepos.x < bowlX + bowlwidth &&
        bowlY < mousepos.y && mousepos.y < bowlY + bowlheight
    ) {
        bowlheight = 150
        bowlwidth = 150
    }
});
function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



function gameloop() {

    draw();



    requestAnimationFrame(gameloop); 
}


gameloop();