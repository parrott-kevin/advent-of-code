const { knotHash } = require('../day-10')

const part1 = (input) => {
  const used = Array.from(Array(128).keys()).reduce((result, i) => {
    const hashed = knotHash(`${input}-${i}`)
    result += hashed.split('').map(i => parseInt(i, 16).toString(2).padStart(4, '0')).join('').split('').filter(i => i === '1').length
    return result
  }, 0)
  return used
}

const part2 = (input) => {
  const grid = Array.from(Array(128).keys()).map(i => {
    const hashed = knotHash(`${input}-${i}`)
    return hashed.split('').map(i => parseInt(i, 16).toString(2).padStart(4, '0')).join('').split('').map(i => i === '1' ? '#' : '.')
  })
  const regionGrid = []
  let region = 1
  // for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
  //   const row = grid[rowIndex]
  //   for (let i = 0; i < row.length; i++) {
  //     if (row[i] === '#') {
  //       if (rowIndex < grid.length - 1) {
  //         row[i] = region
  //         grid[rowIndex + 1][i] = grid[rowIndex + 1][i] === '#' ? region : '.'
  //         if (i < row.length - 1) {
  //           row[i + 1] = row[i + 1] === '#' ? region : '.'
  //         }
  //         region++
  //       } else {
  //         row[i] = region
  //         region++
  //       }
  //     } else if (row[i] !== '.') {
  //       if (rowIndex < grid.length - 1) {
  //         const localRegion = row[i]
  //         grid[rowIndex + 1][i] = grid[rowIndex + 1][i] === '#' ? localRegion : '.'
  //         if (i < row.length - 1) {
  //           row[i + 1] = row[i + 1] === '#' ? localRegion : '.'
  //         }
  //       }
  //     }
  //   }
  // }
  const test = []
  for (let i = 0; i < 8; i++) {
    test.push(grid[i].slice(0, 9))
  }
  console.log(grid[0].join(''))
  console.log(test)
  return region
}

module.exports = { part1, part2 }
