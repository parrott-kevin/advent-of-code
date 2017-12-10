const fs = require('fs')
const util = require('util')
const path = require('path')

const { main } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')
}

describe('day 9', () => {
  describe('part 1 and 2', () => {
    test('example 1', () => {
      const input = '{{{},{},{{}}}}'
      const result = main(input)
      const answer = 16
      expect(result.score).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = main(input)
      const answer = {
        score: 16021,
        garbageCount: 7685
      }
      expect(result.score).toEqual(answer.score)
      expect(result.garbageCount).toEqual(answer.garbageCount)
    })
  })
})
