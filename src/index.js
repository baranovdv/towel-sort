
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let resultArray = []

  // if(matrix = []) {
  //   return []
  // }
if(matrix != undefined) {
  for(let i = 0; i < matrix.length; i++){

    if(i % 2){
      for(let j = matrix[i].length - 1; j >= 0 ; j--)

      {
        // console.log(matrix[i][j])
        resultArray.push(matrix[i][j])
      }
    } else {
      for(let j = 0;j < matrix[i].length; j++)

      {
        // console.log(matrix[i][j])
        resultArray.push(matrix[i][j])
      }
    }
  }
}


  return resultArray;
}

// console.log(module.exports([[1, 2, 3],[4, 5, 6], [7, 8, 9]]))