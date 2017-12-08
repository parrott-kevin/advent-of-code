const fs = require('fs')
const util = require('util')
const path = require('path')

const { main } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(/\n/)
}

describe('day XXX', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = [
        `b inc 5 if a > 1`,
        `a inc 1 if b < 5`,
        `c dec -10 if a >= 1`,
        `c inc -20 if c == 10`
      ]
      const result = main(input)
      const answer = 1
      expect(result.lastHighest).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = main(input)
      const answer = 4877
      expect(result.lastHighest).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = [
        `b inc 5 if a > 1`,
        `a inc 1 if b < 5`,
        `c dec -10 if a >= 1`,
        `c inc -20 if c == 10`
      ]
      const result = main(input)
      const answer = 10
      expect(result.highest).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = main(input)
      const answer = 5471
      expect(result.highest).toEqual(answer)
    })
  })
})
