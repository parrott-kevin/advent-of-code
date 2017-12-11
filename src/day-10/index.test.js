const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)

const puzzleInput = async () => {
  return readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')
}

describe('day 10', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = '3,4,1,5'
      const result = part1(input, 5)
      const answer = 12
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = part1(input, 256)
      const answer = 46600
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = ''
      const result = part2(input, 256)
      const answer = 'a2582a3ae66e6e86e3812dcb672a272'
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = part2(input, 256)
      const answer = '23234babdc6afa036749cfa9b597de1b'
      expect(result).toEqual(answer)
    })
  })
})
