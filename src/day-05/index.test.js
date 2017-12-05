const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(/\n/)

describe('day 4', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = ''
      const result = part1(input)
      const answer = ''
      expect(result).toEqual(answer)
    })

    test('puzzle', () => {
      const input = ''
      const result = part1(input)
      const answer = ''
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = ''
      const result = part1(input)
      const answer = ''
      expect(result).toEqual(answer)
    })

    test('puzzle', () => {
      const input = ''
      const result = part1(input)
      const answer = ''
      expect(result).toEqual(answer)
    })
  })
})
