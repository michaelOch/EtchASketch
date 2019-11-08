//  Selection of Elements and Styling Them
const containerWrapper = document.querySelector('#container-wrapper');
containerWrapper.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; justify-content: center;');

const container = document.querySelector('#container');
container.setAttribute('style', 'display: flex; flex-direction: row; flex-wrap: wrap;');

const clearBtn = document.querySelector('#btn');
clearBtn.setAttribute('style', 'padding: 10px 20px; background-color: #000; color: #fff; cursor: pointer; border-radius: 10px; margin-bottom: 1rem;');

clearBtn.addEventListener('click', function(){
    const numOfGrid = prompt('Please input the dimension of the grid\nFor example: 50 i.e. 50x50 Grid.');
    container.innerHTML = '';
    createGrid(numOfGrid);
});

function createGrid(num) {
    let squareGridArr = [];

    //  Setting the width of the container to accomodate the dimension of the grid system with each grid 16x16 px.
    container.style.width = num * 16 + 'px';
    for(let i = 1; i <= num * num; i++) {
        squareGridArr[i] = document.createElement('div');
        squareGridArr[i].setAttribute('style', 'box-sizing: border-box; width: 16px; height: 16px; border: 0.5px solid #e5e5e5');
    }
    
    squareGridArr.forEach(squareGrid => {
        let hoverCount = 1;
        container.appendChild(squareGrid);
        squareGrid.addEventListener('mouseenter', function(){
            //  For a random colored sketch
            // squareGrid.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
            
            //  For different shades of black hover effect 
            switch (hoverCount) {
                case 1:
                    squareGrid.style.backgroundColor = '#e5e5e5';
                    hoverCount++;
                    break;
                case 2:
                    squareGrid.style.backgroundColor = '#cccccc';
                    hoverCount++;
                    break;
                case 3:
                    squareGrid.style.backgroundColor = '#b2b2b2';
                    hoverCount++;
                    break;
                case 4:
                    squareGrid.style.backgroundColor = '#999999';
                    hoverCount++;
                    break;
                case 5:
                    squareGrid.style.backgroundColor = '#7f7f7f';
                    hoverCount++;
                    break;
                case 6:
                    squareGrid.style.backgroundColor = '#666666';
                    hoverCount++;
                    break;
                case 7:
                    squareGrid.style.backgroundColor = '#4c4c4c';
                    hoverCount++;
                    break;
                case 8:
                    squareGrid.style.backgroundColor = '#323232';
                    hoverCount++;
                    break;
                case 9:
                    squareGrid.style.backgroundColor = '#191919';
                    hoverCount++;
                    break;
                case 10:
                    squareGrid.style.backgroundColor = '#000000';
                    hoverCount++;
                    break;
                default:
                    squareGrid.style.backgroundColor = '#000000';
                    break;
            }
        });
    });
}

createGrid(30);