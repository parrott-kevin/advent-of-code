const { part1, part2 } = require('./index')

const puzzleInput = 'xlqgujun'

describe('day 14', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = 'flqrgnkx'
      const result = part1(input)
      const answer = 8108
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = puzzleInput
      const result = part1(input)
      const answer = 8204
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = 'flqrgnkx'
      const result = part2(input)
      const answer = 1242
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      // const input = await puzzleInput()
      // const result = part2(input)
      // const answer = true
      // expect(result).toEqual(answer)
    })
  })
})
