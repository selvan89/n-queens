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

window.findNRooksSolution = function(boardSize) {

  var dimension = boardSize>=4? boardSize : 4; //boardSize || 4;
  var board = new Board({n:dimension});
  var solution = []; //fixme
  var numRooks = 0;
  var currentRow=0;
  //var storArr = [[]];

  var rookRecur = function(row){
    //numRooks condition
    if(numRooks === n){
      solution.push(board);
    }
    console.log('row:', row);
    //check to see if a piece already exists so we don't write over it.
    for(var k=0; k<row.length; k++){
      if(row[k] !== 1){
        row[k]=1; //pu]t 1 in place, recursion below will have row = board.get(currentRow++)
        console.log('row[k]: ', row[k]);
      }
      console.log("board conflicts: ",board.hasAnyRooksConflicts() );
      if(board.hasAnyRooksConflicts()){
        row[k]=0;
      }
    }
        numRooks++;
        rookRecur(board.get(currentRow++));
  };
  rookRecur(board.get(currentRow));
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

/*
  // first get the board var board = new Board(n);
  // keep track of how many rooks placed on board
  // place first rook at 0,0 and a
  // if # rooks != N(board.get('n')), then
  //  then scratch board and place first rook of this round at 0,1
  // continue until number of rooks equals N
  // some base case thoughts: return solution if (#rooks === n)
  //                          back track if (columnConflict || rowsConflict)
  // place rook at first location, check every cell to see if there is conflict
  // when conflict checks return true, place a rook in the cell
  // continue this until # rooks === n
*/


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
