const { part1, part2 } = require('./index')

describe('day 15', () => {
  describe('part 1', () => {
    test('example', () => {
      const result = part1(65, 8921)
      const answer = 588
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const result = part1(873, 583)
      const answer = 631
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const result = part2(65, 8921)
      const answer = 309
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const result = part2(873, 583)
      const answer = 279
      expect(result).toEqual(answer)
    })
  })
})
