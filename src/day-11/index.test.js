const fs = require('fs')
const util = require('util')
const path = require('path')

const { main } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(',')
}

describe('day 11', () => {
  describe('part 1 and 2', () => {
    test('example', () => {
      const input = ['se', 'sw', 'se', 'sw', 'sw']
      const result = main(input)
      const answer = 3
      expect(result.final).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const result = main(input)
      const finalDistance = 759
      const maxDistance = 1501
      expect(result.final).toEqual(finalDistance)
      expect(result.max).toEqual(maxDistance)
    })
  })
})
