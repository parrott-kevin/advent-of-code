const { knotHash } = require('../day-10')

const part1 = (input) => {
  const used = Array.from(Array(128).keys()).reduce((result, i) => {
    const hashed = knotHash(`${input}-${i}`)
    result += hashed.split('').map(i => parseInt(i, 16).toString(2).padStart(4, '0')).join('').split('').filter(i => i === '1').length
    return result
  }, 0)
  return used
}

const part2 = () => {
  return true
}

module.exports = { part1, part2 }
