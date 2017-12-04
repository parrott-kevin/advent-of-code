const part1 = (input) => {
  const result = input.reduce((result, str) => {
    return str.split(' ').length === [...new Set(str.split(' '))].length ? result += 1 : result
  }, 0)
  return result
}

const part2 = (input) => {
  const result = input.reduce((result, str) => {
    const deduped = [...new Set(str.split(' ').map(s => s.split('').sort().join('')))]
    return str.split(' ').length === deduped.length ? result += 1 : result
  }, 0)
  return result
}

module.exports = { part1, part2 }
