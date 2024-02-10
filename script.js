
let createGrid = () => {
    const sketchArea = document.querySelector('.sketch_area');
    amount = 50;

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

boxLayout.forEach((box) => {
    box.addEventListener('mouseleave', () => {
        box.setAttribute('style', 'background: black');
    });
});