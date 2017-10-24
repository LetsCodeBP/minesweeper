var showDetails = false

chai.should()
var expect = chai.expect;

const testFunctions = [testGenerateNewBoard, testCalculateNearbyMines]

// test boundle, testing generate new board
function testGenerateNewBoard(){
  function emptyBoard(){
    let board = generateNewBoard(0, 0, 0)
    board.should.be.an('array').that.is.empty
  }
  function moreMinesThanFieds(){
    try{
      let board = generateNewBoard(0, 0, 1)
    }catch(err) {
      return
    }
    throw new Error('Expecting error if more mines than cells!')
  }
  function someBoard(){
    let board = generateNewBoard(9, 10, 90)
    board.should.be.an('array')
    board.should.have.lengthOf(9)
    board.forEach((row)=>{
      row.should.have.lengthOf(10)
      row.forEach((cell)=>{
        cell.should.not.be.empty
        expect(cell).to.have.own.property('mine')
        expect(cell.mine).to.be.true
      })
    })
  }
  return runTests('generateNewBoard()', [emptyBoard, moreMinesThanFieds, someBoard])
}

// test boundle, test calculateNearbyMines
function testCalculateNearbyMines(){
  function noNearby(){
    const board = [[{}]]
    const cell = calculateNearbyMines(0, 0, board)
    cell.should.be.an('object')
    expect(cell).to.have.property('nearbyMines')
    expect(cell.nearbyMines).to.be.a('number').and.to.be.equal(0)
  }
  function allNearby(){
    const board = [[{mine: true},{mine: true},{mine: true}],
    [{mine: true},{},{mine: true}],
    [{mine: true},{mine: true},{mine: true}]]
    const cell = calculateNearbyMines(1, 1, board)
    cell.should.be.an('object')
    expect(cell).to.have.property('nearbyMines')
    expect(cell.nearbyMines).to.be.a('number').and.to.be.equal(8)
  }
  function testCorner(){
    const board = [[{mine: true},{},{}],
    [{mine: true},{mine: true},{}],
    [{mine: true},{mine: true},{mine: true}]]
    const cell = calculateNearbyMines(0, 2, board)
    cell.should.be.an('object')
    expect(cell).to.have.property('nearbyMines')
    expect(cell.nearbyMines).to.be.a('number').and.to.be.equal(1)
  }
  return runTests('calculateNearbyMines()', [noNearby, allNearby, testCorner])
}

// takes care of running the tests of test bundles
function runTests(testName, testList){
  let res = {
    message: `Tests for ${testName}`,
    passCount: 0,
    totalCount: 0
  }
  testList.forEach((fn)=>{
    res.totalCount += 1
    try{
      fn()
      res.passCount += 1
    }catch(err){
      if(showDetails) console.error(err)
    }
  })
  return res
}

// runs the test bundles
(function testRunner(){
  testFunctions.forEach((fn) => {
    colors = {
      'pass': 'green',
      'fail': 'red'
    }
    // res = {message: '', passCount, totalCount}
    res = fn()
    result = res.totalCount - res.passCount === 0? 'pass' : 'fail'
    console.log(`%c ${res.message} (${res.passCount}/${res.totalCount})`, `color: ${colors[result]}`);
  })
})()
