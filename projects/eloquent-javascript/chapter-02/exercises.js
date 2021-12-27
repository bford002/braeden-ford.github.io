
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  for (let i = "#"; i.length <= num; i += "#") {
    console.log(i);
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (var i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) {
  var chessBoard = [];
  for (let i = 0; i < x; i++) {
    let row;
    if (i % 2 === 0) {
      row = " ";
      for (let i = 1; i < x; i++) {
        if (i % 2 === 0) {
          row += " ";
        } else {
          row += "#";
        }
      }
    } else {
      row = "#";
      for (let i = 1; i < x; i++) {
        if (i % 2 === 0) {
          row += "#";
        } else {
          row += " ";
        }
      }
    }
    chessBoard.push(row);
  }
  console.log(chessBoard.join("\n") + "\n");
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
