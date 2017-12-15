const part1 = (seedA, seedB) => {
  const factorA = 16807
  const factorB = 48271
  const divisor = 2147483647

  let pairs = 0
  let prevA = seedA
  let prevB = seedB

  const rounds = 40000000
  for (let i = 0; i < rounds; i++) {
    const numA = (prevA * factorA) % divisor
    prevA = numA
    const binA = numA.toString(2).padStart(32, '0').slice(16)

    const numB = (prevB * factorB) % divisor
    prevB = numB
    const binB = numB.toString(2).padStart(32, '0').slice(16)
    pairs = binA === binB ? pairs + 1 : pairs
  }
  return pairs
}

const part2 = (seedA, seedB) => {
  const factorA = 16807
  const factorB = 48271
  const divisor = 2147483647

  let acceptableA = []
  let acceptableB = []
  let prevA = seedA
  let prevB = seedB

  const rounds = 5000000

  while (acceptableA.length < rounds) {
    const numA = (prevA * factorA) % divisor
    prevA = numA
    if (numA % 4 === 0) {
      acceptableA.push(numA.toString(2).padStart(32, '0').slice(16))
    }
  }

  while (acceptableB.length < rounds) {
    const numB = (prevB * factorB) % divisor
    prevB = numB
    if (numB % 8 === 0) {
      acceptableB.push(numB.toString(2).padStart(32, '0').slice(16))
    }
  }

  let pairs = 0
  for (let i = 0; i < rounds; i++) {
    pairs = acceptableA[i] === acceptableB[i] ? pairs + 1 : pairs
  }

  return pairs
}

module.exports = { part1, part2 }
