const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')
}

describe('day 18', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = `set a 1
      add a 2
      mul a a
      mod a 5
      snd a
      set a 0
      rcv a
      jgz a -1
      set a 1
      jgz a -2`
      const result = part1(input)
      const answer = 4
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
      // const input = []
      // const result = part2(input)
      // const answer = true
      // expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      // const input = await puzzleInput()
      // const result = part2(input)
      // const answer = true
      // expect(result).toEqual(answer)
    })
  })
})
