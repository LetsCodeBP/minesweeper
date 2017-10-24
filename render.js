function render(board, {cellSize, separatorLineThickness, width, height}){
    context.clearRect(0, 0, canvas.width, canvas.height);
    let rows = board.length
    let columns = board[0].length
    let options = arguments[1]
    // draw row separators
    range(rows + 1).map(function(i){
        let nextStartingYCoordinate = cellSize * i + separatorLineThickness * i
        context.fillStyle = '#808080'
        context.fillRect(0,nextStartingYCoordinate, width, separatorLineThickness)
    })
    // draw column separators
    range(columns + 1).map(function(i){
        let nextStartingXCoordinate = cellSize * i + separatorLineThickness * i
        context.fillStyle = '#808080'
        context.fillRect(nextStartingXCoordinate, 0, separatorLineThickness, height)
    })
    // draw cells
    board.forEach(function(row, i) {
       row.forEach(function(cell, j){
           // base colour
           fillCell(j, i, '#bdbdbd', options)
           if(cell.shouldShow){
                fillCell(j, i, '#f0f0f0', options)
                if(cell.mine){
                    drawMine(j,i, {...options, changeBackground: true})
                }else if (cell.nearbyMines){
                    drawNumber(j,i, cell.nearbyMines, options)
                }
           }else if(cell.reveal){
             if(cell.mine){
                 drawMine(j,i, options)
             }
             if(cell.flag){
                 drawFlag(j,i, options)
             }
           } else {
                if(cell.flag){
                    drawFlag(j,i, options)
                }
           }
       })
    });
}

function drawMine(x,y, {cellSize, separatorLineThickness, changeBackground}){
    let mineImage = document.getElementById('mine')
    let options = arguments[2]
    if(changeBackground) fillCell(x,y, 'red', options)
    let [xPx, yPx] = coordinatesToPixel(x,y, options)
    context.drawImage(mineImage,xPx,yPx, cellSize, cellSize);
}

function drawFlag(x,y, {cellSize, separatorLineThickness}){
    let flagImage = document.getElementById('flag')
    let options = arguments[2]
    let [xPx, yPx] = coordinatesToPixel(x,y, options)
    context.drawImage(flagImage,xPx,yPx, cellSize, cellSize);
}

function fillCell(x,y, color, {cellSize, separatorLineThickness}){
    let options = arguments[3]
    let [xPx, yPx] = coordinatesToPixel(x,y, options)
    context.fillStyle = color;
    context.fillRect(xPx, yPx, cellSize, cellSize)
}

function drawNumber(x,y, num, {cellSize, separatorLineThickness}){
    let options = arguments[3]
    let [xPx, yPx] = coordinatesToPixel(x,y, options)

    context.font= cellSize +"px monospace";
    const colors = {
        1: '#0000ff',
        2: '#070',
        3: '#ff0000',
        4: '#00007b',
        5: '#7a0000',
        6: '#008080',
        7: '#000000',
        8: '#808080'
    }
    context.fillStyle= colors[num];

    let textWidth = context.measureText(num).width

    context.fillText(num , xPx + cellSize/2 - (textWidth / 2), yPx + cellSize/6*5 );
}
