'use strict'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const config = {
  rows: 10,
  columns: 20,
  cellSize: 30,
  mineCount: 30,
  separatorLineThickness: 2
}

function calculateBoardSize(dimension, {cellSize, separatorLineThickness}){
    // calculates the height or width in px of the board
    // dimension row or column count of the board
    return cellSize * dimension + separatorLineThickness * (dimension + 1)
}

canvas.width = config.width = calculateBoardSize(config.columns, config)
canvas.height = config.height = calculateBoardSize(config.rows, config)

canvas.addEventListener('click', handleClick.bind(window))
canvas.addEventListener('contextmenu', handleRightClick.bind(window))

let board = generateNewBoard(config.rows, config.columns, config.mineCount)
render(board, config)
