const deconstruct = (textArray) => {
  const instructions = textArray.map(i => {
    const commands = i.split(' ')
    const register = commands[0]
    const incDec = commands[1] === 'inc' ? 1 : -1
    const add = commands[2] * incDec
    const condition = {
      right: commands[4],
      logic: commands[5],
      left: parseInt(commands[6], 10)
    }
    return {
      register,
      add,
      condition
    }
  })
  return instructions
}

const main = (input) => {
  const instructions = deconstruct(input)
  const storage = {}
  let highest = null
  instructions.forEach(i => {
    !(i.register in storage) && (storage[i.register] = 0)
    !(i.condition.right in storage) && (storage[i.condition.right] = 0)

    switch (i.condition.logic) {
      case '>':
        storage[i.register] = storage[i.condition.right] > i.condition.left ? storage[i.register] + i.add : storage[i.register]
        break
      case '>=':
        storage[i.register] = storage[i.condition.right] >= i.condition.left ? storage[i.register] + i.add : storage[i.register]
        break
      case '<':
        storage[i.register] = storage[i.condition.right] < i.condition.left ? storage[i.register] + i.add : storage[i.register]
        break
      case '<=':
        storage[i.register] = storage[i.condition.right] <= i.condition.left ? storage[i.register] + i.add : storage[i.register]
        break
      case '==':
        storage[i.register] = storage[i.condition.right] === i.condition.left ? storage[i.register] + i.add : storage[i.register]
        break
      case '!=':
        storage[i.register] = storage[i.condition.right] !== i.condition.left ? storage[i.register] + i.add : storage[i.register]
        break
    }
    const clone = Object.assign({}, storage)
    const hCandidate = (Object.keys(clone)
      .map(key => [key, clone[key]])
      .sort((a, b) => a[1] - b[1])
      .pop()
    )[1]
    highest = highest > hCandidate ? highest : hCandidate
  })
  const lastHighest = (Object.keys(storage)
    .map(key => [key, storage[key]])
    .sort((a, b) => a[1] - b[1])
    .pop()
  )[1]

  return { lastHighest, highest }
}

module.exports = { main }
