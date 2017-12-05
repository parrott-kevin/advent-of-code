const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)

const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8'))
    .split(/\n/)
    .map(row => {
      const items = row.split(/\t/)
      return items.map(i => parseInt(i, 10))
    })
}

describe('day 2', () => {
  describe('part 1', () => {
    test('example', () => {
      const value = [[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]]
      const result = part1(value)
      const answer = 18
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const value = await puzzleInput()
      const result = part1(value)
      const answer = 45972
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const value = [
        [5, 9, 2, 8],
        [9, 4, 7, 3],
        [3, 8, 6, 5]
      ]
      const result = part2(value)
      const answer = 9
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const value = await puzzleInput()
      const result = part2(value)
      const answer = 326
      expect(result).toEqual(answer)
    })
  })
})
