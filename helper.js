function coordinatesToPixel(x,y, {cellSize, separatorLineThickness}){
    let xPx = cellSize * x + separatorLineThickness * (x + 1)
    let yPx = cellSize * y + separatorLineThickness * (y + 1)
    return [xPx, yPx]
}

function pixelToCoordinates(xPx, yPx, {cellSize, separatorLineThickness}){
    let x = Math.floor(xPx/(cellSize + separatorLineThickness))
    let y = Math.floor(yPx/(cellSize + separatorLineThickness))
    return [x,y]
}

function range(lower, upper){
    if(!upper){
        upper = lower
        lower = 0
    }
    return Array.apply(null, Array(upper + Math.abs(lower))).map(function (_, j) {return j + lower;});
}
