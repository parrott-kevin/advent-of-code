const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(/\n/).map(i => parseInt(i, 10))
}

describe('day XXX', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = []
      const result = part1(input)
      const answer = true
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = part1(input)
      const answer = true
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = []
      const result = part2(input)
      const answer = true
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = part2(input)
      const answer = true
      expect(result).toEqual(answer)
    })
  })
})
