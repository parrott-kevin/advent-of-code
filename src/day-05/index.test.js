const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(/\n/).map(i => parseInt(i, 10))
}

describe('day 5', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = [0, 3, 0, 1, -3]
      const result = part1(input)
      const answer = 5
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = part1(input)
      const answer = 342669
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = [0, 3, 0, 1, -3]
      const result = part2(input)
      const answer = 10
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = part2(input)
      const answer = 25136209
      expect(result).toEqual(answer)
    })
  })
})
