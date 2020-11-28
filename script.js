const fs = require('fs');
const pathFromConsole = process.argv;

let data = fs.readFileSync(pathFromConsole[2]);
let matrix1 = Object.values(JSON.parse(data));
let matrix2= Object.values(JSON.parse(data));
const rows = matrix1.length;
const columns = matrix1[0].length;

const findNearestCells = (column,row,currentMatrix,nextMatrix) =>{
    let counter = 0;
    //левая верхняя
    if (row!==0 && column!==0){
        if (currentMatrix[row-1][column-1]===1){
            counter++;
        }
    }
    //в середине верхняя
    if (row!==0){
        if (currentMatrix[row-1][column]===1){
            counter++;
        }
    }
    //справа верхняя
    if (row!==0 && column!==columns-1){
        if (currentMatrix[row-1][column+1]===1){
            counter++;
        }
    }
    //слева средняя
    if (column!==0){
        if (currentMatrix[row][column-1]===1){
            counter++;
        }
    }
    //справа средняя
    if (column!==columns-1){
        if (currentMatrix[row][column+1]===1){
            counter++;
        }
    }
    //слева нижняя
    if (column!==0 && row!==rows-1){
        if (currentMatrix[row+1][column-1]===1){
            counter++;
        }
    }
    //в середине нижняя
    if (row!==rows-1){
        if (currentMatrix[row+1][column]===1){
            counter++;
        }
    }
    //справа нижняя
    if (column!==columns-1 && row!==rows-1){
        if (currentMatrix[row+1][column+1]===1){
            counter++;
        }
    }
    newMatrixFormer(column,row,counter,currentMatrix,nextMatrix);
}
const newMatrixFormer = (column,row,cellsCounter,currentMatrix,nextMatrix) =>{
    if (currentMatrix[row][column]===1){
        if (cellsCounter===2 || cellsCounter===3){
            nextMatrix[row][column]=1;
        }else{
            nextMatrix[row][column]=0;
        }
    }else{
        if (cellsCounter===3){
            nextMatrix[row][column]=1;
        }else{
            nextMatrix[row][column]=0;
        }
    }
}
const formNewArray = (currentMatrix,nextMatrix) =>{
    for (let row=0;row<currentMatrix.length;row++) {
        for (let column=0;column<currentMatrix[row].length;column++){
            findNearestCells(column,row,currentMatrix,nextMatrix)
        }
    }
}
let switcher=true;
setInterval(()=>{
    if(switcher){
        switcher=false;
        formNewArray(matrix1,matrix2);
        console.log('-----------------NEW STATE---------------------');
        matrix2.forEach(row=>console.log(row.toString()));
    }else{
        switcher=true;
        formNewArray(matrix2,matrix1);
        console.log('-----------------NEW STATE---------------------');
        matrix1.forEach(row=>console.log(row.toString()));
    }
},1000)



