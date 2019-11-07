const containerWrapper = document.querySelector('#container-wrapper');
containerWrapper.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; justify-content: center;');

const container = document.querySelector('#container');
container.setAttribute('style', 'display: flex; flex-direction: row; flex-wrap: wrap;');

const clearBtn = document.querySelector('#btn');
clearBtn.setAttribute('style', 'padding: 10px 20px; background-color: #000; color: #fff; cursor: pointer; border-radius: 10px; margin-bottom: 1rem;');

let squareGridArr = [];

function createGrid(num) {
    container.style.width = num * 16 + 'px';
    for(let i = 1; i <= num * num; i++) {
        squareGridArr[i] = document.createElement('div');
        squareGridArr[i].setAttribute('style', 'box-sizing: border-box; width: 16px; height: 16px; border: 0.5px solid #a9a9a9');
    }
    
    squareGridArr.forEach(squareGrid => {
        container.appendChild(squareGrid);
        squareGrid.addEventListener('mouseenter', function(){
            squareGrid.style.backgroundColor = '#a9a9a9';
        });
    });
}

createGrid(30);

clearBtn.addEventListener('click', function(){
    const numOfGrid = prompt('Please input the dimension of the grid\nFor example: 50 i.e. 50x50 Grid.');
    squareGridArr.forEach(squareGrid => {
        squareGrid.style.backgroundColor = "#fff";
    });
    createGrid(numOfGrid);
});