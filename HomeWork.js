let campus1 = document.getElementById("campus1");
let campus2 = document.getElementById("campus2");
let campus3 = document.getElementById("campus3");
let campus4 = document.getElementById("campus4");
let campus5 = document.getElementById("campus5");

for (let i = 2; i < 10; i++) {
    campus1.innerHTML += `<div class=nineGrid id=grid${i}></div>`
    let currentGrid = document.getElementById("grid" + i);
    for (let j = 1; j < 10;j++) {
        currentGrid.innerHTML += `
        <p>${i} * ${j} = ${i * j}</p><br>
        `
    };    
};




