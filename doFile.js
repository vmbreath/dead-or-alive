const fs = require('fs');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let rows = 10;
let columns = 10;
let lines = 0;
let matrix = {};
for (let i = 0; i < rows*columns; i++) {
    if (i%columns===0) {
       lines++;
       matrix[lines] = [];
    }
    matrix[lines].push(getRandomInt(2));
}

let data = JSON.stringify(matrix);
fs.writeFileSync('matrix.json', data);








