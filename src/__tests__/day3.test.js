const day3 = require('../day3')

describe('day 3', () => {
  describe('part 1', () => {
    test('Data from square 12 is carried 3 steps', () => {
      const num = 12
      const result = day3.part1(num)
      const answer = 3
      expect(result).toEqual(answer)
    })

    test('Data from square 23 is carried only 2 steps', () => {
      const num = 23
      const result = day3.part1(num)
      const answer = 2
      expect(result).toEqual(answer)
    })

    test('Data from square 1024 must be carried 31 steps', () => {
      const num = 1024
      const result = day3.part1(num)
      const answer = 31
      expect(result).toEqual(answer)
    })

    test('puzzle', () => {
      const num = 347991
      const result = day3.part1(num)
      const answer = 480
      expect(result).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const num = 300
      const result = day3.part2(num)
      const answer = 304
      expect(result).toEqual(answer)
    })

    test('puzzle', () => {
      const num = 347991
      const result = day3.part2(num)
      const answer = 349975
      expect(result).toEqual(answer)
    })
  })
})
