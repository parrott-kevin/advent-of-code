const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(/\n/)
}

describe('day 12', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = [
        '0 <-> 2',
        '1 <-> 1',
        '2 <-> 0, 3, 4',
        '3 <-> 2, 4',
        '4 <-> 2, 3, 6',
        '5 <-> 6',
        '6 <-> 4, 5'
      ]
      const result = part1(input)
      const answer = 6
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = part1(input)
      const answer = 175
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = [
        '0 <-> 2',
        '1 <-> 1',
        '2 <-> 0, 3, 4',
        '3 <-> 2, 4',
        '4 <-> 2, 3, 6',
        '5 <-> 6',
        '6 <-> 4, 5'
      ]
      const result = part2(input)
      const answer = 2
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = part2(input)
      const answer = 213
      expect(result).toEqual(answer)
    })
  })
})
