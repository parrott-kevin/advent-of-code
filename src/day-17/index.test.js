const { part1, part2 } = require('./index')

describe('day 17', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = 3
      const result = part1(input)
      const answer = 638
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = 349
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
      const input = 349
      const result = part2(input)
      const answer = true
      expect(result).toEqual(answer)
    })
  })
})
