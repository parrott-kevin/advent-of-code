const fs = require('fs')
const util = require('util')
const path = require('path')

const { part1, part2 } = require('./index')

const readFile = util.promisify(fs.readFile)
const puzzleInput = async () => {
  return (await readFile(path.join(__dirname, './puzzleInput.txt'), 'utf8')).split(/\n/)
}

const decompose = (ary) => {
  return ary.reduce((result, i) => {
    const parentChild = i.split('->')
    const children = parentChild.length > 1 ? parentChild[1].split(',').map(c => c.trim()) : []
    const programWeight = parentChild[0].split('(')
    const program = programWeight[0].trim()
    const weight = parseInt(programWeight[1].slice(0, -1), 10)
    result[program] = Object.assign({}, {
      program,
      weight,
      children
    })
    return result
  }, {})
}

describe('day XXX', () => {
  describe('part 1', () => {
    test('example', () => {
      const input = `pbga (66)
      xhth (57)
      ebii (61)
      havc (66)
      ktlj (57)
      fwft (72) -> ktlj, cntj, xhth
      qoyq (66)
      padx (45) -> pbga, havc, qoyq
      tknk (41) -> ugml, padx, fwft
      jptl (61)
      ugml (68) -> gyxo, ebii, jptl
      gyxo (61)
      cntj (57)`
      const decomposedInput = decompose(input.split(/\n/))
      const result = part1(decomposedInput)
      const answer = 'tknk'
      expect(result.program).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const decomposedInput = decompose(input)
      const result = part1(decomposedInput)
      const answer = 'hmvwl'
      expect(result.program).toEqual(answer)
    })
  })

  describe('part 2', () => {
    test('example', () => {
      const input = `pbga (66)
      xhth (57)
      ebii (61)
      havc (66)
      ktlj (57)
      fwft (72) -> ktlj, cntj, xhth
      qoyq (66)
      padx (45) -> pbga, havc, qoyq
      tknk (41) -> ugml, padx, fwft
      jptl (61)
      ugml (68) -> gyxo, ebii, jptl
      gyxo (61)
      cntj (57)`
      const decomposedInput = decompose(input.split(/\n/))
      const result = part2(decomposedInput)
      const answer = 60
      expect(result).toEqual(answer)
    })

    test('puzzle', async () => {
      const input = await puzzleInput()
      const decomposedInput = decompose(input)
      const result = part2(decomposedInput)
      const answer = 1853
      expect(result).toEqual(answer)
    })
  })
})
