const knot = (list, lengths, rounds) => {
  let position = 0
  let skip = 0
  for (let i = 0; i < rounds; i++) {
    for (const length of lengths) {
      if (position + length >= list.length) {
        const sub = [...list.slice(position, position + length), ...list.slice(0, length - (list.length - position))].reverse()
        const front = sub.slice(0, list.length - position)
        const back = sub.slice(list.length - position)
        list = [...back, ...list.slice(length - (list.length - position), position), ...front]
      } else {
        const sub = list.slice(position, position + length).reverse()
        list = [...list.slice(0, position), ...sub, ...list.slice(position + length)]
      }
      position = (position + length + skip) % list.length
      skip++
    }
  }
  return list
}

const knotHash = (input, listLength = 256, suffix = [17, 31, 73, 47, 23]) => {
  const list = Array.from(Array(listLength).keys())
  const lengths = [...input.split('').map(s => s.charCodeAt(0)), ...suffix]
  let rounds = 64

  const sparseHash = knot(list, lengths, rounds)

  const denseHash = Array.from(Array(16).keys())
    .map(i => sparseHash.slice(i * 16, i * 16 + 16).reduce((r, i) => r ^ i, 0))

  const hex = denseHash.reduce((result, i) => i < 10 ? `${result}0${i.toString(16)}` : `${result}${i.toString(16)}`, '')

  return hex
}

const part1 = (input, listLength) => {
  const lengths = [...input.split(',').map(s => parseInt(s, 10))]
  const list = Array.from(Array(listLength).keys())
  const results = knot(list, lengths, 1)
  return results[0] * results[1]
}

const part2 = (input, listLength) => {
  return knotHash(input, listLength)
}

module.exports = { part1, part2, knotHash }
