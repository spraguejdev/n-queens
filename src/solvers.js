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
window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var rows = solution.rows();
  var currentRow = 0;
  var currentColumn = 0;

  for (let i = 0; i < (n * n); i++) {
    solution.togglePiece(currentRow, currentColumn); 
    if (!solution.validRookMove(currentRow, currentColumn)) {
      solution.togglePiece(currentRow, currentColumn); 
    }
    currentColumn++;
    if (currentColumn === n) { 
      currentColumn = 0; 
      currentRow++; 
    } 
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return Object.values(solution.changed);
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board({n: n});
  
  var countSolutions = function(row) {
    if (row === n) {
      solutionCount++;
      return; 
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (board.validRookMove(row, i)) {
        countSolutions(row + 1);
      }
      board.togglePiece(row, i);
    }
    
  };
  countSolutions(0);
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
  var solutionCount = 0;
  // if (n === 4) {debugger}
  var board = new Board({n: n});
  if (n === 1) { return 1; }
  if (n === 3 || n === 2 ) { return 0; }
  var countSolutions = function(row) {
    if (row === n) {
      solutionCount++;
      // if (n === 7 ) {
      
      // var viewBoard = board.attributes;
      // for (key in viewBoard) {
      //   console.log(viewBoard[key])
      // }
      

      // console.log(`Solution#${solutionCount} \n ${boardValues}`);
      return; 
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (board.validQueenMove(row, i)) {
        countSolutions(row + 1);
      }
      board.togglePiece(row, i);
    }
    
  };
  countSolutions(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
