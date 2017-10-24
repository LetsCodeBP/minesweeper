'use strict'

/*
  Let's Code BP! - Minesweeper Workshop

  You will need to code in this file, test results are displayed in the console.

  Board: 2d Array containing cells
  Example:
  [
  [{"nearbyMines":0},{"nearbyMines":1},{"nearbyMines":1}],
  [{"nearbyMines":0},{"nearbyMines":2},{"mine":true}],
  [{"nearbyMines":0},{"nearbyMines":2},{"mine":true}]
  ]

  Cell: object
  Properties:
    nearbyMines: Integer (0-8)
    mine: Boolean
    flag: Boolean
    shouldShow: Boolean
    reveal: Boolean
 */

function generateNewBoard(rowCount , columnCount, mineCountToGenerate){
  /*
    IN: rowCount (integer), columnCount (integer), mineCountToGenerate (integer)
    OUT: board (2d array), contains cells (object) {mine: Boolean, Integer}
    DESC: Crerates a board, fills it with mines, and calculates nearby mine counts for cells
  */

  // create empty board

  // add mines to the board
  // TODO: write and use generateMineCoordinates function

  // calculate nearby mine counts
  // TODO: write and use calculateNearbyMines function
}

function generateMineCoordinates(columns, rows, mineCountToGenerate){
  /*
    IN: rowCount (integer), columnCount (integer), mineCountToGenerate (integer)
    OUT: mineCoordinates (array), contains coordinate of mines: [[3,4],[4,6]]
    DESC: Crerates an array, that contains the coordinates of all the mines. All mine have to be unique coordinate.
  */

  // generate random coordinates until reach the necessary number of mines.

  // check if the new generated coordinate is unique
}

function calculateNearbyMines(rowIndex, columnIndex, board){
  /*
    IN: rowCount (integer), columnCount (integer), board (2d array)
    OUT: cell (object) posible value {"nearbyMines":0..8} or {"mine":true}
    DESC: Creates an object, that contains the information regarding one cell
  */

  // Use getNearbyCells helper function to get all the nearby cells
  // count the ones that have mines
}

function getNearbyCells(rowIndex, columnIndex, board){
  /*
    IN: rowIndex (integer), columnIndex (integer), board (2d array)
    OUT: list of cells
    DESC: return cells that share an edge or a corner with the input cell
  */
}

function handleClick(event){
  /*
    IN: event left click
    OUT: void
    DESC: based on mouse click's place recalculate table and render it
    SIDEEFFECT: re-renders the board
  */

  // use pixelToCoordinates helper to get the coordinate

  //use the move function to evaluate the action

  //render the board
}

function handleRightClick(event){
  /*
    IN: event right click
    OUT: void
    DESC: based on the mouse click's place toggle cell.flag if necessary
    SIDEEFFECT: re-renders the board
  */
  // hint event.preventDefault() could be useful
}

function move(x, y, board){
  /*
    IN: x (integer), y (integer), board (2d array)
    OUT: board (2d array), contains cells (object) {mine: Boolean, Integer}
    DESC: apply changes to the game state based on the clicked cells content
  */

  // if the cell has a mine, the game is lost
  // show this cell, reveal all cells

  // if cells has no mines nearby, show nearby cells, use showNearbyCells function

  // show this cell only
}

function showNearbyCells(x, y, board){
  /*
    IN: x (integer), y (integer), board (2d array)
    OUT: board or void
    DESC: recrusivley check nearby cells and show them if empty
  */

  // use getNearbyCells from helper
}

/*
 * Fished?
 * Congratulations!
 * If you have some time left, you can still improve it further! Some tips:
 *  - give a possibility to choose from game types at the beginning (ex.: easy, medium, hard)
 *  - show mines left
 *  - show time spent in game
 *  - give a possibility to start a new game
 *
 *  ... write a solver algorithm for it
 *  http://web.mat.bham.ac.uk/R.W.Kaye/minesw/ordmsw.htm
 *
 * Hope you've enjoyed the meetup!
 * We would appreciate your feedback.
 *
 *  _          _   _        _____          _        ____  _____  _
 * | |        | | ( )      / ____|        | |      |  _ \|  __ \| |
 * | |     ___| |_|/ ___  | |     ___   __| | ___  | |_) | |__) | |
 * | |    / _ \ __| / __| | |    / _ \ / _` |/ _ \ |  _ <|  ___/| |
 * | |___|  __/ |_  \__ \ | |___| (_) | (_| |  __/ | |_) | |    |_|
 * |______\___|\__| |___/  \_____\___/ \__,_|\___| |____/|_|    (_)
 */
