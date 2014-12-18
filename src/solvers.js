/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// window.findNRooksSolution = function(boardSize) {

//   var dimension = boardSize>=4? boardSize : 4; //boardSize || 4;
//   var board = new Board({n:dimension});
//   var solution = []; //fixme
//   var numRooks = 0;
//   var currentRow=0;
//   //var storArr = [[]];

//   var rookRecur = function(row){
//     //numRooks condition
//     if(numRooks === dimension){
//       solution.push(board);
//     }
//     console.log('row:', row);
//     //check to see if a piece already exists so we don't write over it.
//     for(var k=0; k<row.length; k++){
//       if(row[k] !== 1){
//         row[k]=1; //pu]t 1 in place, recursion below will have row = board.get(currentRow++)
//         console.log('row[k]: ', row[k]);
//       }
//       console.log("board conflicts: ",board.hasAnyRooksConflicts() );
//       if(board.hasAnyRooksConflicts()){
//         row[k]=0;
//       }
//     }
//         numRooks++;
//         rookRecur(board.get(currentRow++));
//   };
//   rookRecur(board.get(currentRow));
//   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
//   return solution;
// };

window.findNRooksSolution = function(boardSize) {

  //var dimension = boardSize>=4? boardSize : 4; //boardSize || 4;
  // if(boardSize < 2){
  //   return null;
  // }
  var board = new Board({n:boardSize});
  var solution = []; //fixme
  var numRooks = 0;
  var currentBoard = [];
  //var storArr = [[]];



    //check to see if a piece already exists so we don't write over it.
  var size = boardSize;
  for(var i=0; i<size; i++){
    var row = board.get(i);
    for(var k=0; k<row.length; k++){
      if(row[k] !== 1){
        row[k]=1; //pu]t 1 in place, recursion below will have row = board.get(currentRow++)
        numRooks++;
      }
      if(board.hasAnyRooksConflicts()){
        row[k]=0;
        numRooks--;
      }
    }
    currentBoard.push(row);
  }


  console.log('Single solution for ' + boardSize + ' rooks:', JSON.stringify(solution));
  solution = currentBoard;
  return solution;
};




// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(boardSize) {
  var solutionCount = []; // solutionCount.length
  var board = new Board({n:boardSize});
  var numRooks = 0;
  var currentBoard = [];

  var recurRook = function(boards){
    var size = boardSize;
    for(var i=0; i<size; i++){
      var row = board.get(i);
      for(var k=boards; k<row.length; k++){
        if(row[k] !== 1){
          row[k]=1; //pu]t 1 in place, recursion below will have row = board.get(currentRow++)
          numRooks++;
        }
        if(board.hasAnyRooksConflicts()){
          row[k]=0;
          numRooks--;
        }
      }
      currentBoard.push(row);
    }
    if(numRooks === boardSize){
      solution.push(currentBoard);
      recurRook(solution.length);
    }
    else {
    currentBoard = [];  ///we need to figure out how to back track to original spot
    recurRook(solution.length)
    }
  };

  //console.log('Number of solutions for ' +  boardSize + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(boardSize) {
  console.log('boardSize:' ,boardSize);
  if(boardSize===0){
    return [];
  }else if(boardSize === 1){
    return [[1]];
  }else if(boardSize<4){
    return [];
  }
  var board = new Board({n:boardSize});
  var solution = []; //fixme
  var numQueens = 0;
  var currentBoard = [];
  //var storArr = [[]];
  start = 0;



    //check to see if a piece already exists so we don't write over it.
var recurQ = function(start, board){
  //debugger;
  if(start>Math.pow(boardSize,2)){
    return;
  }
  if(start>boardSize){
    start = 0;
  }
  var size = boardSize;
  console.log('size: ' ,size);
  for(var i=0; i<size; i++){
    var row = board.get(i);
    for(var k=start; k<row.length; k++){
      if(row[k] !== 1){
        row[k]=1; //pu]t 1 in place, recursion below will have row = board.get(currentRow++)
        numQueens++;
      }
      if(board.hasAnyQueensConflicts()){
        row[k]=0;
        numQueens--;
      }
      if(k===row.length -1 && i!==numQueens){
        // have to go back to prev row and change the 1 cell
        currentBoard = [];
        // reset our board
        var newBoard = new Board({n:size});
        recurQ(++start, newBoard);

      }
    }
      currentBoard.push(row);
  }

    if(numQueens === boardSize){
      solution = currentBoard;
      return solution;
    }
    else{
      currentBoard = []
      //reset our board
      var newBoard = new Board({n:size});
      recurQ(++start, newBoard);
    }
};

return recurQ(start, board);

  console.log('Single solution for ' + boardSize + ' queens:', JSON.stringify(solution));
  // solution = currentBoard;
  // console.log('solution: ', solution);
  //return solution;
  //return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
