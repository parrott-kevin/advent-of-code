const fs = require('fs')
const util = require('util')
const path = require('path')

const { realloaction } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(/\t/).map(i => parseInt(i, 10))
}

describe('day 6', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = [0, 2, 7, 0]
      const result = realloaction(input)
      const answer = 5
      expect(result.cycles).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = realloaction(input)
      const answer = 12841
      expect(result.cycles).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = [0, 2, 7, 0]
      const result = realloaction(input)
      const answer = {
        cycles: 5,
        cycleDiff: 4
      }
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = realloaction(input)
      const answer = {
        cycles: 12841,
        cycleDiff: 8038
      }
      expect(result).toEqual(answer)
    })
  })
})
