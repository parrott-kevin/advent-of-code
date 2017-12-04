const part1 = (input) => {
  const result = input.reduce((sum, str) => {
    return str.split(' ').length === new Set(str.split(' ')).size ? sum + 1 : sum
  }, 0)
  return result
}

const part2 = (input) => {
  const result = input.reduce((sum, str) => {
    const deduped = new Set(str.split(' ').map(s => s.split('').sort().join('')))
    return str.split(' ').length === deduped.size ? sum + 1 : sum
  }, 0)
  return result
}

module.exports = { part1, part2 }
