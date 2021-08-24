const grid = document.querySelector('.grid');
const blackBtn = document.querySelector('.blackbtn');
const autumnBtn = document.querySelector('.autumnbtn');
const rainbowBtn = document.querySelector('.rainbowbtn');
const clearBtn = document.querySelector('.clearbtn');
const sizeBtn = document.querySelector('.sizebtn');


function createGrid(col, rows) {
    for (let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        grid.appendChild(div).classList.add('box');
    }
}


function blackColor() {
    const boxes = document.querySelectorAll('.box');
    blackBtn.addEventListener('click' , () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        }))
    })
}


function autumnColor() {
    const boxes = document.querySelectorAll('.box');
    const autumnPalette = ['#59200f', '#8f2323', '#a7532d', '#bc7535', '#cc9d3a']
    autumnBtn.addEventListener('click' , () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            const random = autumnPalette[Math.floor(Math.random() * autumnPalette.length)];
            box.style.backgroundColor = random;
        }))
    })
}


function rainbowColor() {
    const boxes = document.querySelectorAll('.box');
    rainbowBtn.addEventListener('click' , () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        }))
    })
}


function resetColor() {
    const boxes = document.querySelectorAll('.box');
    clearBtn.addEventListener('click' , () => {
        boxes.forEach(box => box.style.backgroundColor = 'white');
    })
}


function resetGrid() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
}


function setGridSize() {
    sizeBtn.addEventListener('click' , () => {
        const boxes = document.querySelectorAll('.box');
        let size = prompt('Enter the Size of the Grid. (1-100)');
        if (size > 0 && size < 101) {
            resetGrid();
            createGrid(size, size);
            blackColor();
            autumnColor();
            rainbowColor();
            resetColor();
        }

        else {
            let invalidNum = alert('Please try again');
        }
    })
}


createGrid(15, 15);
blackColor();
autumnColor();
rainbowColor();
resetColor();
setGridSize();

