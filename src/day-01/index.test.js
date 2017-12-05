const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')

describe('day 1', () => {
  describe('part 1', () => {
    test('1122 produces a sum of 3', () => {
      const result = part1('1122')
      const known = 3
      expect(result).toEqual(known)
    })

    test('1111 produces 4', () => {
      const result = part1('1111')
      const known = 4
      expect(result).toEqual(known)
    })

    test('1234 produces 0', () => {
      const result = part1('1234')
      const known = 0
      expect(result).toEqual(known)
    })

    test('91212129 produces 9', () => {
      const result = part1('91212129')
      const known = 9
      expect(result).toEqual(known)
    })

    test('day 1 input', async () => {
      const num = await puzzleInput()
      const result = part1(num)
      const known = 1216
      expect(result).toEqual(known)
    })
  })

  describe('part 2', () => {
    test('1212 produces 6', () => {
      const num = '1212'
      const result = part2(num)
      const known = 6
      expect(result).toEqual(known)
    })

    test('1221 produces 0', () => {
      const num = '1221'
      const result = part2(num)
      const known = 0
      expect(result).toEqual(known)
    })

    test('123425 produces 4', () => {
      const num = '123425'
      const result = part2(num)
      const known = 4
      expect(result).toEqual(known)
    })

    test('123123 produces 12', () => {
      const num = '123123'
      const result = part2(num)
      const known = 12
      expect(result).toEqual(known)
    })

    test('12131415 produces 4', () => {
      const num = '12131415'
      const result = part2(num)
      const known = 4
      expect(result).toEqual(known)
    })

    test('12131415 produces 4', async () => {
      const num = await puzzleInput()
      const result = part2(num)
      const known = 1072
      expect(result).toEqual(known)
    })
  })
})
