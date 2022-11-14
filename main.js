document.addEventListener('DOMContentLoaded', function () {
    gridDimensions(16);


const sizeBtn = document.querySelector('#sizeBtn');
sizeBtn.addEventListener('click', () => {
    let size = getSize();
    gridDimensions(size);
});


const eraseBtn = document.querySelector('#eraseBtn');
eraseBtn.addEventListener('click', () => {
    eraseGrid();
});

function gridDimensions(size) {
    const container = document.querySelector('.container');

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let sizeSq = size * size;

    for (let i = 0; i < sizeSq; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        container.insertAdjacentElement('beforeend', div);
    }
}

function getSize() {
    let input = prompt('enter size');
    if(!input){
        getSize();
    }
    else if(input < 0 || input > 100){
        getSize();
    }
    else{
        return input;
    }
}

function eraseGrid(){
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white');
}

});