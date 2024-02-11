
let emptyGrid = () => {
    let sketchArea = document.querySelector('.sketch_area');

    sketchArea.innerHTML = '';
}

let createGrid = (amount = 4) => {
    const sketchArea = document.querySelector('.sketch_area');

    for (let i = 0; i < amount; i++) {
        let box = document.createElement('div');
        box.classList.add('row');
        sketchArea.appendChild(box);

        for (let j = 0; j < amount; j++) {
            let sketchBox = document.createElement('div');
            sketchBox.classList.add('box');
            box.appendChild(sketchBox);
        }
    }
}

createGrid();

let boxLayout = document.querySelectorAll('.box');
let userColor = document.querySelector('.btn_color').value;
let loadBtn = document.querySelector('.btn_load');
let updateColor = document.querySelector('.btn_choose_color');

updateColor.addEventListener('click', () => {
    userColor = document.querySelector('.btn_color').value;
    coloring(userColor);
});

loadBtn.addEventListener('click', () => {
    emptyGrid();
    let user_amount = document.querySelector('.amount_box').value;
    if (user_amount < 1) {
        createGrid();
    } else if (user_amount > 100) {
        createGrid(100);
    } else {
        createGrid(user_amount);
    }
    boxLayout = document.querySelectorAll('.box');
    userColor = document.querySelector('.btn_color').value;
    coloring(userColor);
});

let getOpacity = (box) => {
    let currentOpacity = Number(window.getComputedStyle(box).getPropertyValue("opacity"));
    let updatedOpacity = currentOpacity + 0.1;
    return updatedOpacity;
}

let coloring = (color) => {
    boxLayout.forEach((box) => {
        box.addEventListener('mouseover', () => {
            let currentOpacity = getOpacity(box);
            box.setAttribute('style', `background: ${color}; opacity: ${currentOpacity};`);
        });
    });
}

coloring(userColor);



