const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(/\n/).reduce((storage, i) => {
    const row = i.split(':')
    storage[row[0]] = {
      range: parseInt(row[1], 10),
      position: 0
    }
    return storage
  }, {})
}

describe('day 13', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = {
        0: {
          range: 3,
          position: 0
        },
        1: {
          range: 2,
          position: 0
        },
        4: {
          range: 4,
          position: 0
        },
        6: {
          range: 4,
          position: 0
        }
      }
      const maxDepth = parseInt(Object.keys(input).pop(), 10)
      const result = part1(input, maxDepth)
      const answer = 24
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const maxDepth = parseInt(Object.keys(input).pop(), 10)
      const result = part1(input, maxDepth)
      const answer = 1960
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = {
        0: {
          range: 3,
          position: 0
        },
        1: {
          range: 2,
          position: 0
        },
        4: {
          range: 4,
          position: 0
        },
        6: {
          range: 4,
          position: 0
        }
      }
      const maxDepth = parseInt(Object.keys(input).pop(), 10)
      const result = part2(input, maxDepth)
      const answer = 10
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const maxDepth = parseInt(Object.keys(input).pop(), 10)
      const result = part2(input, maxDepth)
      const answer = 3903378
      expect(result).toEqual(answer)
    })
  })
})
