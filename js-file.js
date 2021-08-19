const grid = document.getElementById("grid");
const blackBtn = document.querySelector('.blackbtn');
const autumnBtn = document.querySelector('.autumnbtn');
const shadeBtn = document.querySelector('.shadebtn');
const clearBtn = document.querySelector('.clearbtn');

function createGrid() {
    for (let i = 0; i < 64; i++) {
        let box = document.createElement('div');
        box.className = "box";
        grid.appendChild(box);
    }                
}


function blackColor() {
    const boxes = document.querySelectorAll('.box');
    blackBtn.addEventListener('click' , () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })
}


function autumnColor() {
    const boxes = document.querySelectorAll('.box');
    const autumnPalette = ['#59200f', '#8f2323', '#a7532d', '#bc7535', '#cc9d3a']
    autumnBtn.addEventListener('click' , () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            const random = autumnPalette[Math.floor(Math.random() * autumnPalette.length)];
            box.style.background = random;
        }))
    })
}



createGrid();
blackColor();
autumnColor();






















