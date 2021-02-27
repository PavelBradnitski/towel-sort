
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined)  return []; 
  let arr = [];
  for(let i = 0; i< matrix.length; i++){
    if ( i%2 == 0) {
      for(let y = 0;y< matrix[i].length;y++){
        arr.push(matrix[i][y]);
      }
    } else {
      for(let y = matrix[i].length-1;y >= 0 ;y--){
        arr.push(matrix[i][y]);
      }
    }
  }
  return arr;
}

