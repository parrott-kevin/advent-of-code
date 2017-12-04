const part1 = (input) => {
  const result = input.reduce((result, str) => {
    const strArray = str.split(' ')
    if (strArray.length === [...new Set(strArray)].length) {
      result += 1
    }
    return result
  }, 0)
  return result
}

const part2 = (input) => {
  const result = input.reduce((result, str) => {
    const strArray = str.split(' ')
    const check = [...new Set(str.split(' ').map(s => {
      return s.split('').sort().join('')
    }))]
    if (strArray.length === check.length) {
      result += 1
    }
    return result
  }, 0)
  return result
}

module.exports = { part1, part2 }
